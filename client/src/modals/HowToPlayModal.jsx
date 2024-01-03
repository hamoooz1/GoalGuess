import React from "react";
import howToPlayCircle from "../howToPlayCircle.svg";
import howToPlayCircleGreen from "../howToPlayCircleGreen.svg";
import '../styles/howToPlay.scss';
import closeSymbol from "../closeSymbol.svg";


const HowToPlayModal = ({ closeModal, isModalOpen }) => {
  return (
    <div className="how-to-play-modal">
      <div className="modal-content">
        <button className="how-to-play-modal__close-button" onClick={() => { closeModal(); }}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="modal-text">
          <h1 className="modal-title">
            How to Play
          </h1>
          <h3>
            Guess the name of the footballer within 6 attempts
          </h3>
          <ul className="modal-list">
            <li>Use the search bar to guess a name</li>
            <li>After your first guess, you'll get some feedback:</li>
            <div className="modal-circles">
              <img className="circle one" src={howToPlayCircle} />
              <img className="circle two" src={howToPlayCircleGreen} />
              <img className="circle three" src={howToPlayCircle} />
              <img className="circle four" src={howToPlayCircleGreen} />
              <img className="circle five" src={howToPlayCircle} />
              <img className="circle six" src={howToPlayCircle} />
            </div>
            <li>The first four items will turn green if you've correctly guessed the player's Nationality, League, Team, or Position</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;