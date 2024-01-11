import React, {useState, useEffect} from "react";
import {useAuth} from "../providers/AuthProvider";
import { useModal } from "../providers/ModalProvider";
import "../styles/navBar.scss";
import HowToPlayModal from "./HowToPlayModal";

import goalGuessLogo from "../football_b.svg";

function NavBar(props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  // function logout() {
  //   props.logout();
  //   props.done();
  // }
  return (
    <nav className="navBar">

      <div className="navBar__left-part">
        <span to="/">
          <img onClick={props.handleHome} src={goalGuessLogo} className="goalGuesslogo" />
        </span>
        <ul className="navBar__menu">
          <li className="menu__item">
            <span to="#" onClick={openModal} className="item__link">
              How to play
            </span>
          </li>
          <li className="menu__item">
            <span className="item__link">
              Leaderboard
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h1 onClick={props.handleHome} className="navBar__title">GOALGUESS</h1>
      </div>
      <div className="navBar__right-part">
        {!!props.user && (
          <>
            <span className="navBar__logged">
              Logged in as {props.user.name}
            </span>
            <button className="btn" onClick={props.logout}>
              Logout
            </button>
          </>
        )}
        {!props.user && (
          <>
            <span onClick={props.handleLoginClick} className="item__link">
              Login
            </span>
            <span onClick={props.handleSignupClick} className="item__link">
              Signup
            </span>
          </>
        )}
      </div>
      {isModalOpen && <HowToPlayModal closeModal={closeModal} />}
    </nav>
  );
}

export default NavBar;
