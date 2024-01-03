import { useReducer } from "react";
import { initialState, reducer, actionTypes } from "./reducer";

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: actionTypes.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  return {
    isModalOpen: state.isModalOpen,
    openModal,
    closeModal,
  };
}

export default useApplicationData;