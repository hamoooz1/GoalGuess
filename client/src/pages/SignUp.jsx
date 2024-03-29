import React, {useState, useContext} from "react";
import {useAuth} from "../providers/AuthProvider";

import "../styles/signUp.scss";
import "../styles/form.scss";
import "../styles/error.scss";
import "../styles/buttons.scss";

function Signup(props) {
  const {createUser} = useAuth();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);

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

    createUser(name, email, password)
      .then(() => props.done());
  };

  return (
    <div className="signUp">
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
        <a className="item__link">
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}

export default Signup;


