import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { user } = useAuth();
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);

  const user_id = user?.id;
  const handleWin = () => {
    setWin(1);
  };
  const handleLose = () => {
    setLose(1);
  };

  const clearWinLoseState = () => {
    setLose(0);
    setWin(0);
  };
  const totalGames = win + lose;

  useEffect(() => {
    // console.log("Payload:", {user_id, win, lose});
    if (!user) {
      return;
    }
    axios
      .post("/api/stats", { user_id, win, lose, totalGames })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error("Error adding stats:", error);
      });
  }, [win, lose]);

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
        win,
        lose,
        handleWin,
        handleLose,
        clearWinLoseState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
