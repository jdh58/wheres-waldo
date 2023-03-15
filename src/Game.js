import Header from './Header';
import './styles/Game.css';
import GameImage from './assets/zyro-image.png';

export default function Game(props) {
  return (
    <>
      <Header />
      <div className="gamePage">
        <h1 className="character-banner">Willy Wonka</h1>
        <div className="gameImage">
          <img src={GameImage} alt="" className="gameImage" />
        </div>
        <h2 className="timer">00:15:76</h2>
      </div>
    </>
  );
}
