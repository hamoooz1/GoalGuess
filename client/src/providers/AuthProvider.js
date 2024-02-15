import axios from "axios";

import { useState, createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = function () {
  return useContext(authContext);
};

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);

  const login = function (email, password) {
    return axios.post("/users/login", { email, password }).then((res) => {
      setUser(res.data.user);
    });
  };
  const logout = () => {
    return axios.post("/users/logout").then((res) => {
      setUser(null);
    });
  };

  const signup = function (name, email, password) {
    return axios
      .post("/users/signUp", { name, email, password })
      .then((res) => {
        setUser(res.data.user);
      });
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
