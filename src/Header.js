import './styles/Header.css';
import Help from './assets/help-circle.svg';
import LogOut from './assets/log-out.svg';
import User from './assets/user.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="help">
        <img src={Help} alt="" />
      </div>
      <h3 className="title">Where's Waldo?</h3>
      <div className="userInfo">
        <img src={User} alt="" className="profilePic" />
        <p className="name">Barry McCockiner</p>
        <button className="logButton">
          <p>Log Out</p> <img src={LogOut} alt="" />
        </button>
      </div>
    </header>
  );
}
