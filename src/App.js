import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Leaderboard from './Leaderboard';
import SignIn from './SignIn';
import Game from './Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
