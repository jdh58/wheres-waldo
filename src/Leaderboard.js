import Header from './Header';

export default function Leaderboard(props) {
  return (
    <>
      <Header />
      {}
      <div className="leaderboardPage">
        <h1 className="title">Leaderboard</h1>
        <ul className="playerScores"></ul>
      </div>
    </>
  );
}