import { Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Leaderboard from './Leaderboard';
import SignIn from './SignIn';
import Game from './Game';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(null);
  const [formattedTime, setFormattedTime] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const sendTime = (finalTime, finalFormattedTime) => {
    setTime(finalTime);
    setFormattedTime(finalFormattedTime);
    setSubmitting(true);
  };

  const quitSubmit = () => {
    setSubmitting(false);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/game" element={<Game sendTime={sendTime} />} />
        <Route
          path="/leaderboard"
          element={
            <Leaderboard
              submitting={submitting}
              time={time}
              formattedTime={formattedTime}
              quitSubmit={quitSubmit}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
