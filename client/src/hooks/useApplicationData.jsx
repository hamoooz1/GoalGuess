import { useEffect, useReducer } from "react";

const initialState = {
  isModalOpen: false
}

const appReducer = (state, action) => {
  switch (action.type) {

    // open modal case can include 'modalType' as a variable if/when multiple modals are introduced, if there is a need to differentiate
    case 'OPEN_MODAL':
        const { payload } = action;
        return {
          ...state,
          isModalOpen: true,
          // modalType
        };

  }
}