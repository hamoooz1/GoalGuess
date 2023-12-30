import React from "react";
import { Link } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";

function NavBar() {
  const { openModal } = useApplicationData();
  return (
    <nav className="navBar">
      <div className="navBar__left-part">
        <Link to="/">
          <img src={goalGuessLogo} className="goalGuesslogo" />
        </Link>
        <ul className="navBar__menu">
          <li className="menu__item">
            <a href="#" onClick={openModal}>How to play</a>
          </li>
          <li className="menu__item">
            <Link to="/">Leaderboard</Link>
          </li>
        </ul>
      </div>
      <div className="navBar__right-part">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default NavBar;
