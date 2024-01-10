import React from 'react';
import "./App.scss";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import useApplicationData from "./hooks/useApplicationData";
import HowToPlayModal from "./modals/HowToPlayModal";
import ModalBackdrop from "./components/ModalBackdrop";

function App() {
  const {
    openModal,
    closeModal,
    isModalOpen
  } = useApplicationData();

  return (
    <div className="App">
      <Homepage openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
      {isModalOpen && <ModalBackdrop onClick={closeModal} />}
      {isModalOpen && <HowToPlayModal closeModal={closeModal} />}
    </div>

  );
}

export default App;
