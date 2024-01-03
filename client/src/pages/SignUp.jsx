import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

import goalGuessLogo from "../football.svg";
import BackgroundVideo from "../components/BackgroundVideo";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

import "../styles/signUp.scss";
import "../styles/form.scss";

import "../styles/buttons.scss";

function SignUp() {
  const [name, setName, handleNameChange] = useForm("");
  const [email, setEmail, handleEmailChange] = useForm("");
  const [password, setPassword, handlePasswordChange] = useForm("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // fetch("/signUp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Handle the logged-in user data for successful login
    //     console.log("Logged in:", data.user);
    //     // Perform any actions after successful login (e.g., redirect)
    //     // history.push("/Homepage");
    //   })
    //   .catch((error) => {
    //     console.error("signUp failed:", error);
    //     setError("signUp failed");
    //   });
  };

  return (
    <div className="signUp">
      <NavBar />
      <h3 className="signUp__title">Sign up</h3>
      <form
        className="form"
        // action="/signUp"
        // method="POST"
        onSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="name">
          Full name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Full name"
          value={name}
          onChange={handleNameChange}
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
          Sign up
        </button>
        <Link to="/login" className="item__link">
          Do you have an account? Login
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
