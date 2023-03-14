import {} from 'firebase/auth';

export default function SignIn(props) {
  return (
    <div className="signInOverlay">
      <div className="signInBox popup">
        <h1 className="title">Sign In</h1>
        <button className="googleSignIn">
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}
