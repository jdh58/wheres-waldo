import Header from './Header';
import './styles/Leaderboard.css';

export default function Leaderboard(props) {
  const submitTime = () => {
    props.quitSubmit();
  };

  return (
    <>
      <Header />

      {props.submitting ? (
        <div className="formContainer">
          <div className="form">
            <legend>Submit Time</legend>
            <h3>{props.formattedTime}</h3>
            <button className="submit" onClick={submitTime}>
              Submit
            </button>
          </div>
        </div>
      ) : null}
      <div className="leaderboardPage">
        <h1 className="title">Leaderboard</h1>
        <ul className="playerScores"></ul>
      </div>
    </>
  );
}
