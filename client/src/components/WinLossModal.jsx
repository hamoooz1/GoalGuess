import React from "react";
import closeSymbol from "../closeSymbol.svg";
import '../styles/modals.scss';
import "../styles/winLoss.scss";

const WinLossModal = ({ isWinLossModalOpen, closeModal, win }) => {
  return (
    <>
        <div className="win-loss modal">
          <div className="modal-content">
            <button className="win-loss-modal__close-button" onClick={closeModal}>
              <img src={closeSymbol} alt="close symbol" />
            </button>
            <div className="modal-text">
              <h1 className="modal-title">
                {win ? "Great job, you got it!" : "Better luck next time!"}
              </h1>
            </div>
            <p>
              Close this window to play again!
            </p>
          </div>
        </div>
    </>
  );
};

export default WinLossModal;