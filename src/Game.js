import Header from './Header';
import './styles/Game.css';

export default function Game(props) {
  return (
    <>
      <Header />
      <div className="gamePage">
        <img src="" alt="" className="gameImage" />
        <h2 className="timer">00:15:76</h2>
      </div>
    </>
  );
}
