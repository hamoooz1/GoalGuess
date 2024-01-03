import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import "../styles/homepage.scss";
import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import BackgroundVideo from "../components/BackgroundVideo";
import HowToPlayModal from "../modals/HowToPlayModal";

function Homepage(props) {
  return (
    <article className="homepage">
      <NavBar closeModal={props.closeModal} isModalOpen={props.isModalOpen} openModal={props.openModal} />

      <BackgroundVideo />
      <div className="content">
        <h1 className="homepage__title">WELCOME</h1>
      </div>

      {props.isModalOpen && <HowToPlayModal closeModal={props.closeModal} />}
    </article>
  );
}

export default Homepage;
