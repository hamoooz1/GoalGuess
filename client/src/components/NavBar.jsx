import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/navBar.scss";

import goalGuessLogo from "../football_b.svg";

function NavBar({ state, handleLogout }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("button pressed");
    handleLogout().then(() => navigate("/"));
  };
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
        {state.isLoggedIn && (
          <>
            <span className="navBar__logged">Logged in as {state.email}</span>
            <button className="btn" onClick={handleClick}>
              Logout
            </button>
          </>
        )}
        {!state.isLoggedIn && (
          <>
            <Link to="/login" className="item__link">
              Login
            </Link>
            <Link to="/signup" className="item__link">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
