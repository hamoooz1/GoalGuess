import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import "../styles/homepage.scss";
import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import BackgroundVideo from "../components/BackgroundVideo";
import HowToPlayModal from "../modals/HowToPlayModal";

function Homepage() {
  const { isModalOpen, openModal, closeModal } = useApplicationData();
  return (
    <article className="homepage">
      <NavBar />

      <BackgroundVideo />
      <div className="content">
        <h1 className="homepage__title">WELCOME</h1>
      </div>

      {isModalOpen && <HowToPlayModal onClose={closeModal} />}
    </article>
  );
}

export default Homepage;
