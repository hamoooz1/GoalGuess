export const initialState = {
  isModalOpen: false,
  modalType: null,
};

export const actionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.payload.modalType,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalType: null,
      };
    default:
      return state;
  }
};