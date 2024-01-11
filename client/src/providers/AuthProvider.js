import axios from "axios";

import { useState, createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = function () {
  return useContext(authContext);
};

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);
  // const [reqError, setReqError] = useState(null);

  const login = function (email, password) {
    // setUser({ email: "a@a.gmail.com", name: "Alice" });
    // return;
    return axios.post("/users/login", { email, password }).then((res) => {
      setUser(res.data.user);
    });
  };
  const logout = () => {
    setUser(null);
    return;
    // return axios.post("/users/logout").then((res) => {
    //   setUser(null);
    // });
  };

  const signup = function (name, email, password) {
    return axios
      .post("/users/signUp", { name, email, password })
      .then((res) => {
        setUser(res.data.user);
      });
    // .catch((error) => {
    //   setReqError(error.response.data.error);
    // });
  };
  const value = {
    user,
    login,
    signup,
    logout,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};
export default AuthProvider;
