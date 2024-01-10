import axios from "axios";

import { useState, createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = function () {
  return useContext(authContext);
};

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);

  const login = function (email, password) {
    // setUser({ email: "a@a.gmail.com", name: "Alice" });
    // return;
    return axios.post("/users/login", { email, password }).then((res) => {
      setUser(res.data);
    });
  };
  const logout = () => {
    setUser(null);
    return;
    // return axios.post("/users/logout").then((res) => {
    //   setUser(null);
    // });
  };

  const createUser = function (name, email, password) {
    axios.post("/users/sigUp", { name, email, password }).then((res) => {
      setUser(res.data);
    });
  };

  const value = {
    user,
    login,
    createUser,
    logout,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};
export default AuthProvider;
