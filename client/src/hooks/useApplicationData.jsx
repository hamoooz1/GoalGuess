import { useState } from "react";

function useApplicationData() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { 
    isModalOpen,
    openModal,
    closeModal,
  };
}

export default useApplicationData;