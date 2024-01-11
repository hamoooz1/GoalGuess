import React from "react";
import "../styles/navBar.scss";
import goalGuessLogo from "../football_b.svg";

function NavBar({ openModal, handleLogout }) {
  const openHowToPlayModal = () => {
    openModal("howToPlay");
  };
  const navigate = useNavigate();

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
        <a href="/login" className="item__link">
          Login
        </a>
        <a href="/signUp" className="item__link">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default NavBar;