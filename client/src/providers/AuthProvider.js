import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const { useState, createContext, useContext } = require("react");

export const authContext = createContext();

export const useAuth = function () {
  return useContext(authContext);
};

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  const handleLogin = function (email, password) {
    return (
      axios
        .post("/users/login", { email, password })
        .then((res) => {
          console.log(res.data);
          setUser({ email, password });
        })
        // .then(() => {
        //   navigate("/");
        // })
        .catch((error) => {
          console.error("login error:", error);
          setError(error.response.data.error);
        })
    );
  };
  const handleLogout = () => {
    return axios
      .post("/users/logout")
      .then((res) => {
        console.log(res.data);
        setUser(null);
      })
      .catch((error) => {
        console.error("logout error:", error);
        setError(error.response.data.error);
      });
  };
  const handleSignUp = function (name, email, password) {
    return axios
      .post("/users/sigUp", { name, email, password })
      .then((res) => {
        // console.log(res.data);
        setUser({ name, email, password });
      })
      .catch((error) => {
        console.error("login error:", error);
        setError(error.response.data.error);
      });
  };

  const value = { user, handleLogin, handleSignUp, handleLogout };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};
export default AuthProvider;
