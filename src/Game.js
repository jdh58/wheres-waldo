import Header from './Header';
import './styles/Game.css';
import GameImage from './assets/zyro-image.png';
import TargetBoxes from './TargetBoxes';
import PopUp from './PopUp';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Game(props) {
  const [gameStatus, setGameStatus] = useState('before');
  const [renderPopUp, setRenderPopUp] = useState(false);
  const [xVal, setXVal] = useState(null);
  const [yVal, setYVal] = useState(null);
  const [selectedChar, setSelectedChar] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [correctArr, setCorrectArr] = useState([]);
  const [time, setTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const startGame = () => {
    setGameStatus('during');

    // Start timer
    setTimerInterval(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 10)
    );
  };

  useEffect(() => {
    let tinySeconds = time % 100;
    let seconds = Math.floor(time / 100);
    let minutes = Math.floor(seconds / 60);

    if (tinySeconds < 10 && tinySeconds > 0) {
      tinySeconds = `0${tinySeconds}`;
    } else if (tinySeconds === 0) {
      tinySeconds = '00';
    }

    if (seconds < 10 && seconds > 0) {
      seconds = `0${seconds}`;
    } else if (seconds === 0) {
      seconds = '00';
    }

    if (minutes < 10 && minutes > 0) {
      minutes = `0${minutes}`;
    } else if (minutes <= 0) {
      minutes = '00';
    }

    setFormattedTime(`${minutes}:${seconds}.${tinySeconds}`);
  }, [time]);

  useEffect(() => {
    if (correct >= 10) {
      clearInterval(timerInterval);
      setGameStatus('after');
    }
  }, [correct]);

  const handlePopUpClick = (e) => {
    const guessedChar = e.target.classList[0];
    /* If the guess is correct, update the styling to alert user,
    and make sure it hsn't been guessed before. If it hasn't iterate correct */
    if (guessedChar === selectedChar) {
      // Make sure it's not already guessed.
      for (let i = 0; i < correctArr.length; i++) {
        if (guessedChar === correctArr[i]) {
          return;
        }
      }
      // Update styling
      document
        .querySelector(`.tagPopUp .${guessedChar}`)
        .classList.add('disabled');
      document.querySelector('.tagPopUp').style.border = '2px green solid';
      // Update state
      setCorrect((correct) => correct + 1);
      let temp = correctArr;
      temp.push(guessedChar);
      setCorrectArr(temp);
    } else {
      document.querySelector('.tagPopUp').style.border = '2px red solid';
    }
  };

  const handleImageClick = (e) => {
    console.log(e);

    // If selected a pop-up answer, don't re-render the popup or update character
    if (e.target.nodeName === 'P') {
      return;
    }

    // Set the position for the pop-up
    setXVal(e.clientX + 5);
    setYVal(e.clientY - 50);

    // Set the character selected in state (null if none)
    if (e.target.nodeName === 'IMG') {
      setSelectedChar(null);
    } else {
      setSelectedChar(e.target.classList[1]);
    }

    // Render the popup with a clean border
    setRenderPopUp(true);
    document.querySelector('.tagPopUp').style.border = 'none';
  };

  const submitScore = () => {
    // props.sendInfo(time, formattedTime, )
  };

  return (
    <>
      <Header />
      <div className="gamePage">
        {gameStatus === 'before' ? (
          <button className="play" onClick={startGame}>
            PLAY
          </button>
        ) : null}
        {gameStatus === 'during' ? (
          <h2 className="correctIndicator">{correct}/10</h2>
        ) : null}
        {gameStatus === 'after' ? (
          <>
            <h2 className="banner">You Win!</h2>
            <Link to="/leaderboard" onClick={submitScore}>
              SUBMIT
            </Link>
          </>
        ) : null}

        <div className="gameImage" onClick={handleImageClick}>
          <TargetBoxes />
          {renderPopUp ? (
            <PopUp x={xVal} y={yVal} handleClick={handlePopUpClick} />
          ) : null}

          <img src={GameImage} alt="" className="gameImage" />
        </div>
        <h2 className="timer">Time: {formattedTime}</h2>
      </div>
    </>
  );
}
