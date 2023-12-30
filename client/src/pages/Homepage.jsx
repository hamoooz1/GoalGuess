import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import "../styles/homepage.scss";
import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import BackgroundVideo from "../components/BackgroundVideo";

function Homepage() {
  const { isModalOpen, openModal, closeModal } = useApplicationData();
  return (
    <article className="homepage">
      <NavBar />

      <BackgroundVideo />
      <div className="content">
        <h1 className="homepage__title">WELCOME</h1>
      </div>
    </article>
  );
}

export default Homepage;
