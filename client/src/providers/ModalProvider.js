import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);

  const openHowToPlayModal = () => {
    setIsHowToPlayModalOpen(true);
  };

  const closeHowToPlayModal = () => {
    setIsHowToPlayModalOpen(false);
  };

  const openLeaderboardModal = () => {
    setIsLeaderboardModalOpen(true);
  };

  const closeLeaderboardModal = () => {
    setIsLeaderboardModalOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        isHowToPlayModalOpen,
        isLeaderboardModalOpen,
        openHowToPlayModal,
        closeHowToPlayModal,
        openLeaderboardModal,
        closeLeaderboardModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
