import React from "react";
import '../styles/howToPlay.scss'

const HowToPlayModal = ({ onClose }) => {
  return (
    <div className="how-to-play-modal">
      <div className="modal-content">
        {/* Text and stuff goes here */}
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default HowToPlayModal;