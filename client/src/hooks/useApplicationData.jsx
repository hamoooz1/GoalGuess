import { useReducer } from "react";
import { initialState, reducer, actionTypes } from "./reducer";
import axios from 'axios';

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (modalType) => {
    dispatch({ type: actionTypes.OPEN_MODAL, payload: { modalType } });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const isAuthenticated = async () => {
    try {
      await axios.get('/api/checkAuth');
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/logout');
      closeModal();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return {
    isModalOpen: state.isModalOpen,
    modalType: state.modalType,
    openModal,
    closeModal,
    isAuthenticated: isAuthenticated(),
    handleLogout,
  };
}

export default useApplicationData;