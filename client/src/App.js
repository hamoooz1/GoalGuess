import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Routes>
        <Route
            path="/"
            element={
              <Homepage
                openModal={openModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                modalType={modalType}
              />
             }
          />
          <Route
            path="/login"
            element={
              <Login/>
            }
          />
          <Route
            path="/signUp"
            element={
              <SignUp/>
            }
          />
        </Routes>
        {isModalOpen && <ModalBackdrop onClick={closeModal} />}
        {isModalOpen && modalType === "howToPlay" && <HowToPlayModal closeModal={closeModal} />}

      </Router>
    </div>

  );
}

export default App;
