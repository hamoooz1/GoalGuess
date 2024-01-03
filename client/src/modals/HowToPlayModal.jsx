import React from "react";
import '../styles/howToPlay.scss'

const HowToPlayModal = ({ closeModal, isModalOpen }) => {
  return (
    <div className="how-to-play-modal">
      <div className="modal-content">
        {/* Text and stuff goes here */}
        <button onClick={() => closeModal()}>X</button>
      </div>
    </div>
  );
};

export default HowToPlayModal;