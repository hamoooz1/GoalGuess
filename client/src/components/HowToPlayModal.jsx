import React from "react";

import ModalBackdrop from './ModalBackdrop';
import howToPlayCircle from "../howToPlayCircle.svg";



import howToPlayCircleGreen from "../howToPlayCircleGreen.svg";
import howToPlayCircleUp from "../howToPlayCircleUp.svg";
import howToPlayCircleDown from "../howToPlayCircleDown.svg";
import '../styles/howToPlay.scss';
import '../styles/modals.scss';
import closeSymbol from "../closeSymbol.svg";

const HowToPlayModal = ({closeHowToPlayModal}) => {
  return (
    <>
      <div className="how-to-play modal">
        <div className="modal-content">
          <button className="close-button" onClick={closeHowToPlayModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="modal-text">
            <h1 className="modal-title">
              How to Play
            </h1>
            <h3>
              Guess The Player Within 6 Attempts
            </h3>
            <ul className="modal-list">
              <li className="modal-instructions">Use the search bar to guess a name</li>
              <li className="modal-instructions">Using your knowledge of Premier League Players, use the criteria of Nationality,  Club,  Position,  Age,  and Number to prepare your next guess</li>
              <li className="modal-instructions">After your first guess, you'll get some feedback:</li>
              <div className="modal-circles">
                <img className="circle two" src={howToPlayCircleGreen} />
                <img className="circle three" src={howToPlayCircle} />
                <img className="circle four" src={howToPlayCircleGreen} />
                <img className="circle five" src={howToPlayCircleUp} />
                <img className="circle six" src={howToPlayCircleDown} />
              </div>
              <li className="modal-instructions">The box will light up green if the criteria met is true, while turning gray if false</li>
              <li className="modal-instructions">The last two boxes indicate whether the mystery player's age and number are higher or lower than that of the player you guessed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlayModal;