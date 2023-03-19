import './styles/Header.css';
import Help from './assets/help-circle.svg';
import LogOut from './assets/log-out.svg';
import LogIn from './assets/log-in.svg';
import UserPlaceholder from './assets/user.svg';
import Logo from './assets/textLogo.png';
import {
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { app } from './firebase-config';
import { Link } from 'react-router-dom';
import LeaderboardIcon from './assets/leaderboard.svg';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(getAuth(), () => {
      setIsLoggedIn(!!getAuth().currentUser);
    });
  }, []);

  const handleSignOut = () => {
    signOut(getAuth(app));
    setIsLoggedIn(false);
  };

  const handleSignIn = async () => {
    console.log(getAuth(app).currentUser);
    try {
      var provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(app), provider);
      setIsLoggedIn(true);
    } catch {
      console.error('Sign-In Canceled');
    }
  };

  return (
    <header className="header">
      <div className="icons">
        <div className="help">
          <img src={Help} alt="" />
        </div>
        <Link to="/leaderboard" className="leaderboardIcon">
          <img src={LeaderboardIcon} alt="" />
        </Link>
      </div>

      <Link to="/game">
        <img
          src={Logo}
          alt=""
          className="logo"
          onClick={() => console.log(getAuth(app).currentUser)}
        />
      </Link>
      {isLoggedIn ? (
        <div className="userInfo">
          <img
            referrerPolicy="no-referrer"
            src={getAuth(app).currentUser.photoURL || UserPlaceholder}
            alt=""
            className="profilePic"
          />
          <p className="name">
            {getAuth(app).currentUser.displayName || 'Username'}
          </p>
          <button className="logButton out" onClick={handleSignOut}>
            <p>Log Out</p> <img src={LogOut} alt="" />
          </button>
        </div>
      ) : (
        <button className="logButton in" onClick={handleSignIn}>
          <p>Sign In</p> <img src={LogIn} alt="" />
        </button>
      )}
    </header>
  );
}
