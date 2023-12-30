import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/navBar.scss";

import goalGuessLogo from "../football.svg";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar__left-part">
        <Link to="/">
          <img src={goalGuessLogo} className="goalGuesslogo" />
        </Link>
        <ul className="navBar__menu">
          <li className="menu__item">
            <Link to="#" className="item__link">
              How to play
            </Link>
          </li>
          <li className="menu__item">
            <Link to="#" className="item__link">
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="navBar__title">GOALGUESS</h1>
      </div>
      <div className="navBar__right-part">
        <Link to="/login" className="item__link">
          Login
        </Link>
        <Link to="/signUp" className="item__link">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
