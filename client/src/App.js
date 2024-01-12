import "./App.scss";
import { useState } from 'react';
import HomeRoute from "./route/HomeRoute";
import AuthProvider from "./providers/AuthProvider";
import { ModalProvider } from "./providers/ModalProvider";
import ModalBackdrop from "./components/ModalBackdrop";
import HowToPlayModal from "./components/HowToPlayModal";

function App() {
  const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false);

  const openHowToPlayModal = () => {
    setIsHowToPlayModalOpen(true);
  };

  const closeHowToPlayModal = () => {
    setIsHowToPlayModalOpen(false);
  };

  return (
    <div className="App">
      <AuthProvider>
        <ModalProvider>
          <HomeRoute openHowToPlayModal={openHowToPlayModal} />
          {isHowToPlayModalOpen && (
            <>
              <ModalBackdrop onClick={closeHowToPlayModal} />
              <HowToPlayModal closeModal={closeHowToPlayModal} />
            </>
          )}
        </ModalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;