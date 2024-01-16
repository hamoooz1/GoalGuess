import axios from "axios";

import { useState, createContext, useContext, useEffect } from "react";

export const authContext = createContext();

export const useAuth = function () {
  return useContext(authContext);
};

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch session data from the server
    return axios
      .get("/home")
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
      })
      .catch((error) => {
        console.error("Error fetching session data:", error);
      });
  }, []);

  const login = function (email, password) {
    return axios.post("/users/login", { email, password }).then((res) => {
      setUser(res.data.user);
    });
  };
  const logout = () => {
    // setUser(null);
    // return;
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
