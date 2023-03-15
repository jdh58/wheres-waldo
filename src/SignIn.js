import {} from 'firebase/auth';
import { Link } from 'react-router-dom';
import './styles/SignIn.css';
import Logo from './assets/waldoLogo.svg';

export default function SignIn(props) {
  return (
    <div className="signInOverlay">
      <img src={Logo} alt="" className="logo" />
      <div className="signInBox popup">
        <h1 className="title">Sign In</h1>
        <button className="googleSignIn">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt=""
          />
          Sign in with Google
        </button>
        <Link to="/" className="skipSignIn">
          Continue Anonymously
        </Link>
      </div>
    </div>
  );
}
