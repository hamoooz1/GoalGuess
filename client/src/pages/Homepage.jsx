import React from "react";
import NavBar from "../components/NavBar";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";
import BackgroundVideo from "../components/BackgroundVideo";

import Login from "./Login";
import Signup from "./Signup";

import "../styles/homepage.scss";
import HowToPlayModal from "../modals/HowToPlayModal";

function Homepage({ openModal, closeModal, isModalOpen, modalType }) {
  return (
    <article className="homepage">
      <NavBar closeModal={closeModal} isModalOpen={isModalOpen} openModal={openModal} />

      <BackgroundVideo />
      {/* <div className="content">
        <h1 className="homepage__title">WELCOME</h1>
      </div> */}

    </article>
  );
}

export default Homepage;
