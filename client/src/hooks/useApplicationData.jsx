import { useReducer } from "react";
import { initialState, reducer, actionTypes } from "./reducer";

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (modalType) => {
    dispatch({ type: actionTypes.OPEN_MODAL, payload: { modalType } });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  return {
    isModalOpen: state.isModalOpen,
    modalType: state.modalType,
    openModal,
    closeModal,
  };
}

export default useApplicationData;