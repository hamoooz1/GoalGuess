import React, { useState } from "react";
import closeSymbol from "../closeSymbol.svg";
import '../styles/modals.scss';
import "../styles/winLoss.scss";
import silhouette from "../silhouetteSmall.png";

const WinLossModal = ({ isWinLossModalOpen, closeModal, win, randomFootballer }) => {
  const [isMysteryPlayerVisible, setIsMysteryPlayerVisible] = useState(false);

  const revealMysteryPlayer = () => {
    setIsMysteryPlayerVisible(true);
  };

  return (
    <>
      <div className="win-loss modal">
        <div className="modal-content">
          <button className="win-loss-modal__close-button" onClick={closeModal}>
            <img src={closeSymbol} />
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
                <img src={randomFootballer.image} />
                <h2>
                  {randomFootballer.name}
                </h2>
              </>
              :
              <>
                <h1 className="modal-title">
                  Out of guesses!
                </h1>
                <h3>
                  Better luck next time
                </h3>
                <div className="random-footballer">
                  {isMysteryPlayerVisible ? (
                    <>
                      <p>
                        The mystery player was:
                      </p>
                      <img src={randomFootballer.image} />
                      <h2>
                        {randomFootballer.name}
                      </h2>
                    </>
                  ) : (
                    <>
                      <p>
                        Click below to reveal the mystery player
                      </p>
                      <img src={silhouette} className="win-loss silhouette" onClick={revealMysteryPlayer} />
                    </>
                  )}
                </div>
              </>
            }
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