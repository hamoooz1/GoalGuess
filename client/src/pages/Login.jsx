import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";

import goalGuessLogo from "../football.svg";
import BackgroundVideo from "../components/BackgroundVideo";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

import "../styles/login.scss";
import "../styles/form.scss";
import "../styles/error.scss";
import "../styles/buttons.scss";

function Login({
  state,
  setName,
  setEmail,
  setPassword,
  setError,
  handleLogin,
  handleLogout,
}) {
  const { email, password, error } = state;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 5) {
      setError("Password should be at least 5 characters");
      return;
    }
    handleLogin(email, password);
  };
  //   // reset the form fields to ''
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="login">
      <NavBar state={state} handleLogout={handleLogout} />
      <h3 className="login__title">Login</h3>

      <form
        className="form"
        // action="/login"
        // method="POST"
        onSubmit={handleSubmit}
      >
        {error && <p className="error">{error}</p>}
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          // onChange={handleEmailChange}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          // onChange={handlePasswordChange}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Login
        </button>
        <Link to="/signUp" className="item__link">
          Don't have an account? Sign Up
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
// const [email, setEmail, handleEmailChange] = useForm("");
// const [password, setPassword, handlePasswordChange] = useForm("");
// const [error, setError] = useState("");
// // const history = useHistory();

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (!email || !password) {
//     setError("Please fill in all fields");
//     return;
//   }

//   const emailPattern = /\S+@\S+\.\S+/;
//   if (!emailPattern.test(email)) {
//     setError("Please enter a valid email address");
//     return;
//   }

//   if (password.length < 5) {
//     setError("Password should be at least 5 characters");
//     return;
//   }
//   axios
//     .post("/users/login", { email, password })
//     .then((res) => {
//       window.location.href = "/";
//     })
//     .catch((error) => {
//       setError(error.response.data.error);
//     });

// };
