import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
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

function Login({ user, handleLogin, setError }) {
  <NavBar />;
  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!email || !password) {
    //   setError("Please fill in all fields");
    //   return;
    // }

    // const emailPattern = /\S+@\S+\.\S+/;
    // if (!emailPattern.test(email)) {
    //   setError("Please enter a valid email address");
    //   return;
    // }

    // if (password.length < 5) {
    //   setError("Password should be at least 5 characters");
    //   return;
    // }
    handleLogin(user.email, user.password);
    // handleLogin().then(() => navigate("/"));
  };

  return (
    <div className="login">
      <h3 className="login__title">Login</h3>

      <form className="form" onSubmit={handleSubmit}>
        {/* {error && <p className="error">{error}</p>} */}
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          // value={email}
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
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Login
        </button>
        <Link to="/signUp" className="item__link">
          Don't have an account? Sign Up
        </Link>
      </form>
    </div>
  );
}

export default Login;
