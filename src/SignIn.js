import {} from 'firebase/auth';
import { Link } from 'react-router-dom';
import './styles/SignIn.css';

export default function SignIn(props) {
  return (
    <div className="signInOverlay">
      <div className="signInBox popup">
        <h1 className="title">Sign In</h1>
        <button className="googleSignIn">
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
