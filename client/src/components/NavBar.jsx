import React from "react";
import { Link } from "react-router-dom";

import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import AnimatedTextWord from "../components/AnimatedTextWord";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar__left-part">
        <Link to="/">
          <img src={goalGuessLogo} className="goalGuesslogo" />
        </Link>
        <ul className="navBar__menu">
          <li className="menu__item">
            <Link className="link" to="/">
              How to play
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/">Leaderboard</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="navBar__title">GOALGUESS</h1>
      </div>
      <div className="navBar__right-part">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default NavBar;
