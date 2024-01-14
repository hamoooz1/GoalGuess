import "./App.scss";
import { useState } from "react";
import HomeRoute from "./route/HomeRoute";
import AuthProvider from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";
import ModalBackdrop from "./components/ModalBackdrop";
import HowToPlayModal from "./components/HowToPlayModal";
import LeaderboardModal from "./components/LeaderboardModal";

function App() {
  // const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);

  // const openHowToPlayModal = () => {
  //   setIsHowToPlayModalOpen(true);
  // };

  // const closeHowToPlayModal = () => {
  //   setIsHowToPlayModalOpen(false);
  // };

  // const openLeaderboardModal = () => {
  //   console.log("leaderboard opened");
  //   setIsLeaderboardModalOpen(true);
  // };

  // const closeLeaderboardModal = () => {
  //   console.log("leaderboard closed");
  //   setIsLeaderboardModalOpen(false);
  // };

  return (
    <div className="App">
      <AuthProvider>
        <ModalProvider>
          <HomeRoute />
        </ModalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
