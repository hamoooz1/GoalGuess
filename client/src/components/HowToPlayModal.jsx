import React from "react";

import ModalBackdrop from './ModalBackdrop';
import howToPlayCircle from "../howToPlayCircle.svg";
import howToPlayBlank from "../howToPlayBlank.svg";
import howToPlayCircleGreen from "../howToPlayCircleGreen.svg";
import howToPlayCircleUp from "../howToPlayCircleUp.svg";
import howToPlayCircleDown from "../howToPlayCircleDown.svg";
import silhouette from "../silhouetteSimple.png";
import '../styles/howToPlay.scss';
import '../styles/modals.scss';
import closeSymbol from "../closeSymbol.svg";

const HowToPlayModal = ({closeHowToPlayModal}) => {
  return (
    <>
      <div className="how-to-play modal">
        <div className="modal-content">
          <button className="close-button" onClick={closeHowToPlayModal}>
            <img src={closeSymbol} />
          </button>
          <div className="modal-text">
            <h1 className="modal-title">
              How to Play
            </h1>
            <h3>
              Guess the player within 6 attempts
            </h3>
            <h4>When the game starts, we'll randomly select a mystery player</h4>
            <ul className="modal-list">
              
              <li>Use the search bar to make a guess</li>
              <li>After each guess, you'll get some feedback:</li>
              <div className="modal-circles">
                <img className="circle one" src={silhouette} />
                <img className="circle two" src={howToPlayCircleGreen} />
                <img className="circle three" src={howToPlayCircle} />
                <img className="circle four" src={howToPlayCircleGreen} />
                <img className="circle five" src={howToPlayCircleUp} />
                <img className="circle six" src={howToPlayCircleDown} />
              </div>
              <li>The first three hint boxes will turn green if you've guessed the mystery player's Nationality, Team, or Position</li>
              <div className="modal-circles">
                <img className="circle one" src={silhouette} />
                <img className="circle two" src={howToPlayCircleGreen} />
                <img className="circle three" src={howToPlayCircle} />
                <img className="circle four" src={howToPlayCircleGreen} />
                <img className="circle five" src={howToPlayBlank} />
                <img className="circle six" src={howToPlayBlank} />
              </div>
              <li>The last two will tell you if the mystery player's age and number are higher or lower than your guess</li>
              <div className="modal-circles">
                <img className="circle one" src={silhouette} />
                <img className="circle two" src={howToPlayBlank} />
                <img className="circle three" src={howToPlayBlank} />
                <img className="circle four" src={howToPlayBlank} />
                <img className="circle five" src={howToPlayCircleUp} />
                <img className="circle six" src={howToPlayCircleDown} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlayModal;