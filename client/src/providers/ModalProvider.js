import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const { user } = useAuth();
  const [win, setWin] = useState(null);
  // const [lose, setLose] = useState(0);
  // const lose = null;

  //

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

  // useEffect(() => {
  //   // console.log("Payload:", {user_id, win, lose});
  //   if (!user) {
  //     return;
  //   }
  //   if(win) {
  //     if (win !== null) {
  //     const win_count = 1;
  //     const lose_count = 0;
  //     const totalGames = win_count + lose_count;

  //     axios
  //       .post("/api/stats", { user_id, win, lose, totalGames })
  //       .then((res) => {
  //         return res.data;
  //       })
  //       .catch((error) => {
  //         console.error("Error adding stats:", error);
  //       });
  //   }}, [win]);

  //   if (win !== null) {
  //   // const win_count = 0;
  //   // const lose_count = 1;
  //   // const totalGames = win_count + lose_count;

  //   axios
  //     .post("/api/stats", { user_id, win, lose, totalGames })
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error adding stats:", error);
  //     });
  // }}, [win]);

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
