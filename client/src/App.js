import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    isModalOpen,
    modalType
  } = useApplicationData();

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
            path="/"
            element={<Homepage openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} modalType={modalType} />}
          />
        </Routes>
        {isModalOpen && <ModalBackdrop onClick={closeModal} />}
        {isModalOpen && modalType === "howToPlay" && <HowToPlayModal closeModal={closeModal} />}

      </Router>
    </div>

  );
}

export default App;
