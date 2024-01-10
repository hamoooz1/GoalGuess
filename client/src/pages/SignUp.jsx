import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";

import goalGuessLogo from "../football.svg";
import BackgroundVideo from "../components/BackgroundVideo";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

import "../styles/signUp.scss";
import "../styles/form.scss";
import "../styles/error.scss";
import "../styles/buttons.scss";

function SignUp({
  state,
  setName,
  setEmail,
  setPassword,
  setError,
  handleSignUp,
  handleLogout,
}) {
  const { name, email, password, error } = state;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
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
    handleSignUp().then(() => navigate("/"));
  };

  return (
    <div className="signUp">
      <NavBar state={state} handleLogout={handleLogout} />
      <h3 className="signUp__title">Sign up</h3>
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label className="form__label" htmlFor="name">
          Full name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Full name"
          value={name}
          // onChange={handleNameChange}
          onChange={(e) => setName(e.target.value)}
        />
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
          Sign up
        </button>
        <Link to="/login" className="item__link">
          Already have an account? Login
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;

// const [name, setName, handleNameChange] = useForm("");
// const [email, setEmail, handleEmailChange] = useForm("");
// const [password, setPassword, handlePasswordChange] = useForm("");
// const [error, setError] = useState("");

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (!name || !email || !password) {
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

// axios
//   .post("/users/signUp", { name, email, password })
//   .then((res) => {
//     window.location.href = "/";
//   })
//   .catch((error) => {
//     setError(error.response.data.error);
//   });
