import React from 'react';
import "./App.scss";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import useApplicationData from "./hooks/useApplicationData";
import HowToPlayModal from "./modals/HowToPlayModal";
import ModalBackdrop from "./components/ModalBackdrop";

function App() {
  const {
    openModal,
    closeModal,
    isModalOpen,
    modalType
  } = useApplicationData();

  return (
    <div className="App">
      <Homepage
        openModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
      />

      {isModalOpen && <ModalBackdrop onClick={closeModal} />}
      {isModalOpen && modalType === "howToPlay" && <HowToPlayModal closeModal={closeModal} />}
    </div>
  );
}

export default App;