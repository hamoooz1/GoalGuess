import React from 'react';
import Login from '../modals/Login';
import Logout from '../components/Logout';
import Signup from '../modals/Signup';
import "../styles/navBar.scss";
import goalGuessLogo from '../football_b.svg';

function NavBar({ openModal, closeModal, isAuthenticated, handleLogout }) {
  const openHowToPlayModal = () => {
    openModal('howToPlay');
  };

  const openLoginModal = () => {
    openModal('login');
  };

  const openSignupModal = () => {
    openModal('signup');
  };

  return (
    <nav className="navBar">

      <div className="navBar__left-part">
        <a href="/">
          <img src="client/public/goalGuessLogo.png" className="goalGuesslogo" alt="Goal Guess Logo" />
        </a>
        <ul className="navBar__menu">
          <li className="menu__item">
            <a href="#" className="item__link" onClick={openHowToPlayModal}>
              How to play
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="item__link">
              Leaderboard
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="navBar__title">GOALGUESS</h1>
      </div>
      <div className="navBar__right-part">
        {isAuthenticated ? (
          <Logout handleLogout={handleLogout} />
        ) : (
          <React.Fragment>
            <a href="#" className="item__link" onClick={openLoginModal}>
              Login
            </a>
            <a href="#" className="item__link" onClick={openSignupModal}>
              Sign up
            </a>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default NavBar;