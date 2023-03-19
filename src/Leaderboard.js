import Header from './Header';
import './styles/Leaderboard.css';
import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { app } from './firebase-config';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export default function Leaderboard(props) {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    // Get query
    const scoreQuery = query(
      collection(getFirestore(app), 'scores'),
      orderBy('time', 'asc'),
      limit(100)
    );

    onSnapshot(scoreQuery, async () => {
      // Parse query
      const info = await getDocs(scoreQuery);
      // Extract an array of the documents
      const top100 = info.docs;
      // Use the array to put each document's data into a scoreboard item
      setScoreboard(
        top100.map((score, i) => {
          const data = score.data();
          return (
            <li key={uniqid()} className="score">
              <h4 className="scoreRank">{i + 1}.</h4>
              <img src={data.image} alt="" className="scoreImg" />
              <h4 className="scoreName">{data.name}</h4>
              <h4 className="scoreTime">{data.formattedTime}</h4>
            </li>
          );
        })
      );
    });
  }, []);

  const submitTime = async () => {
    // Hide the form
    props.quitSubmit();

    // Write the username, user image, and time to the database.
    try {
      const user = getAuth(app).currentUser;
      await addDoc(collection(getFirestore(app), 'scores'), {
        name: user.displayName,
        image: user.photoURL,
        time: props.time,
        formattedTime: props.formattedTime,
      });
    } catch (error) {
      console.error('Can not write score to database', error);
    }
  };

  /* Also here need to read the top 100 scores, map them
  to li elements to render with pic name and image, make a 
  leaderboard with overflow: scroll */

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
        <ul className="playerScores">
          {!scoreboard ? <p className="loading">Loading...</p> : scoreboard}
        </ul>
      </div>
    </>
  );
}
