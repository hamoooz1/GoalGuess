import React from "react";
import closeSymbol from "../closeSymbol.svg";
import '../styles/modals.scss';
import "../styles/winLoss.scss";

const WinLossModal = ({ isWinLossModalOpen, closeModal, win, randomFootballer }) => {
  return (
    <>
      <div className="win-loss modal">
        <div className="modal-content">
          <button className="win-loss-modal__close-button" onClick={closeModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="modal-text">
            {win ?
              <>
                <h1 className="modal-title">
                  Great job!
                </h1>
                <h3>
                  You correctly guessed the mystery player
                </h3>
              </>
              :
              <>
                <h1 className="modal-title">
                  Out of guesses!
                </h1>
                <h3>
                  Better luck next time
                </h3>
                <p>
                  The mystery player was:
                </p>
              </>
            }
          </div>
          <div className="random-footballer">
            <img src={randomFootballer.image} />
            <h2>
              {randomFootballer.name}
            </h2>
          </div>
          <p>
            Close this window to play again
          </p>
        </div>
      </div>
    </>
  );
};

export default WinLossModal;