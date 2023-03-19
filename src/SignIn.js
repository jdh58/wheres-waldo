import { Link, useNavigate } from 'react-router-dom';
import './styles/SignIn.css';
import Logo from './assets/waldoLogo.svg';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { app } from './firebase-config';
import { useEffect } from 'react';

export default function SignIn(props) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(app), () => {
      if (!!getAuth(app).currentUser) {
        navigate('/game');
      }
    });
  });

  const handleSignIn = async () => {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(app), provider);
  };

  return (
    <div className="signInOverlay">
      <img src={Logo} alt="" className="logo" />
      <div className="signInBox popup">
        <h1 className="title">Sign In</h1>
        <button className="googleSignIn" onClick={handleSignIn}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt=""
          />
          Sign in with Google
        </button>
        <Link to="/game" className="skipSignIn">
          Continue Anonymously
        </Link>
      </div>
    </div>
  );
}
