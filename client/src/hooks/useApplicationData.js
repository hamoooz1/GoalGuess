import { useReducer, useEffect } from "react";

import axios from "axios";

export const ACTIONS = {
  SET_NAME: "SET_NAME",
  SET_PASSWORD: "SET_PASSWORD",
  SET_EMAIL: "SET_EMAIL",
  SET_ERROR: "SET_ERROR",
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case ACTIONS.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    error: "",
    isLoggedIn: false, // Initialize isLoggedIn as false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const navigate = useNavigate();

  const setName = (name) => {
    dispatch({ type: ACTIONS.SET_NAME, payload: name });
  };

  const setEmail = (email) => {
    dispatch({ type: ACTIONS.SET_EMAIL, payload: email });
  };

  const setPassword = (password) => {
    dispatch({ type: ACTIONS.SET_PASSWORD, payload: password });
  };

  const setError = (error) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: error });
  };

  const handleSignUp = () => {
    return axios
      .post("/users/signUp", {
        name: state.name,
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        dispatch({ type: ACTIONS.SET_IS_LOGGED_IN, payload: true });
        return res.data;
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: error.response.data.error,
        });
      });
  };

  const handleLogin = () => {
    return axios
      .post("/users/login", {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        dispatch({ type: ACTIONS.SET_IS_LOGGED_IN, payload: true });
        return res.data;
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: error.response.data.error,
        });
      });
  };

  const handleLogout = () => {
    return axios
      .post("/users/logout")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: ACTIONS.SET_EMAIL, payload: "" });
        dispatch({ type: ACTIONS.SET_PASSWORD, payload: "" });
        dispatch({ type: ACTIONS.SET_IS_LOGGED_IN, payload: false });
        return res.data;
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: error.response.data.error,
        });
      });
  };

  return {
    state,
    setName,
    setEmail,
    setError,
    setPassword,
    handleSignUp,
    handleLogin,
    handleLogout,
  };
};
