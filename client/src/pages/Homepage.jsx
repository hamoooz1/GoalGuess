import React from "react";
import NavBar from "../components/NavBar";
import "../styles/homepage.scss";
import BackgroundVideo from "../components/BackgroundVideo";
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
