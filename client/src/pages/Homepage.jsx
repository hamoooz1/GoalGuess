import React from "react";
import NavBar from "../components/NavBar";
import "../styles/homepage.scss";
import BackgroundVideo from "../components/BackgroundVideo";

function Homepage({ openModal, closeModal, isModalOpen, modalType }) {
  return (
    <article className="homepage">
      <NavBar closeModal={closeModal} isModalOpen={isModalOpen} openModal={openModal} />

      <BackgroundVideo />
    </article>
  );
}

export default Homepage;
