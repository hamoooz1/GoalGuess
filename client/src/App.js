import React from 'react';
import "./App.scss";
import Homepage from "./pages/Homepage";
import useApplicationData from "./hooks/useApplicationData";
import HowToPlayModal from "./modals/HowToPlayModal";
import Login from "./modals/Login";
import Signup from "./modals/Signup";
import ModalBackdrop from "./components/ModalBackdrop";

function App() {
  const {
    openModal,
    closeModal,
    isModalOpen,
    modalType,
    isAuthenticated,
    handleLogout,
  } = useApplicationData();

  return (
    <div className="App">
      <Homepage
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        modalType={modalType}
        isAuthenticated={isAuthenticated}
      />

      {isModalOpen && <ModalBackdrop onClick={closeModal} />}
      {isModalOpen && modalType === "howToPlay" && <HowToPlayModal closeModal={closeModal} />}
      {isModalOpen && modalType === "login" && <Login closeModal={closeModal} />}
      {isModalOpen && modalType === "signup" && <Signup closeModal={closeModal} />}
    </div>
  );
}

export default App;