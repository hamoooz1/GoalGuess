import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
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
    modalType,
    setName,
    setEmail,
    setPassword,
    setError,
    handleSignUp,
    handleLogin,
    handleLogout
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
                handleLogout={handleLogout} 
              />
             }
          />
          <Route
            path="/login"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                setError={setError}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signUp"
            element={
              <SignUp
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setError={setError}
                handleSignUp={handleSignUp}
              />
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
