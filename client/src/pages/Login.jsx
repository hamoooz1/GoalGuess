import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

import goalGuessLogo from "../football.svg";
import BackgroundVideo from "../components/BackgroundVideo";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

import "../styles/login.scss";
import "../styles/form.scss";

import "../styles/buttons.scss";

function Login() {
  const [email, setEmail, handleEmailChange] = useForm("");
  const [password, setPassword, handlePasswordChange] = useForm("");
  const [error, setError] = useState("");
  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the logged-in user data for successful login
        console.log("Logged in:", data.user);
        // Perform any actions after successful login (e.g., redirect)
        // history.push("/Homepage");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("Login failed");
      });
  };
  //   // reset the form fields to ''
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="login">
      <NavBar />
      <h3 className="login__title">Login</h3>
      {error && <p>{error}</p>}
      <form
        className="form"
        // action="/login"
        // method="POST"
        onSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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
