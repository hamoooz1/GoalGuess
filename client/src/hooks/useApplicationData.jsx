import { useReducer } from "react";

const initialState = {
  isModalOpen: false
}

const appReducer = (state, action) => {
  switch (action.type) {

    // open modal case can include 'modalType' as a variable if/when multiple modals are introduced, if there is a need to differentiate
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        // modalType
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        // modalType: null
      };

    default:
      return state;

  }
}



function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return { 
    isModalOpen: state.isModalOpen,
    openModal,
    closeModal,
  };
};

export default useApplicationData;