export const initialState = {
  isModalOpen: false,
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
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};