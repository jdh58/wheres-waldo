import Header from './Header';
import './styles/Game.css';
import GameImage from './assets/zyro-image.png';
import TargetBoxes from './TargetBoxes';
import PopUp from './PopUp';
import { useState, useEffect } from 'react';

export default function Game(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPopUp, setRenderPopUp] = useState(false);
  const [xVal, setXVal] = useState(null);
  const [yVal, setYVal] = useState(null);
  const [selectedChar, setSelectedChar] = useState(null);

  const handlePopUpClick = (e) => {
    const guessedChar = e.target.classList[0];

    // If the guess is correct, update the styling to alert user
    if (guessedChar === selectedChar) {
      document
        .querySelector(`.tagPopUp .${guessedChar}`)
        .classList.add('disabled');
      document.querySelector('.tagPopUp').style.border = '2px green solid';
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

    // Otherwise, render the popup with a clean border
    setRenderPopUp(true);
    document.querySelector('.tagPopUp').style.border = 'none';

    // Set the position for the pop-up
    setXVal(e.clientX + 5);
    setYVal(e.clientY - 50);

    // Set the character selected in state (null if none)
    if (e.target.nodeName === 'IMG') {
      setSelectedChar(null);
    } else {
      setSelectedChar(e.target.classList[1]);
    }
  };

  return (
    <>
      <Header />
      <div className="gamePage">
        <h1 className="character-banner">Willy Wonka</h1>
        <div className="gameImage" onClick={handleImageClick}>
          <TargetBoxes />
          {isPopUp ? (
            <PopUp x={xVal} y={yVal} handleClick={handlePopUpClick} />
          ) : null}

          <img src={GameImage} alt="" className="gameImage" />
        </div>
        <h2 className="timer">00:15:76</h2>
      </div>
    </>
  );
}
