import React, {useState, useContext} from "react";
import {useAuth} from "../providers/AuthProvider";

import "../styles/login.scss";
import "../styles/form.scss";
import "../styles/error.scss";
import "../styles/buttons.scss";

function Login(props) {
  const {login} = useAuth();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState(null);


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
    login(email, password)
      .then(() => props.done());
    // .catch((err) => );

    // props.done();
  };

  return (
    <div className="login">
      <h3 className="login__title">Login</h3>
      <form className="form" onSubmit={handleSubmit}>
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Login
        </button>
        <a className="item__link">Don't have an account? Sign Up</a>
      </form>
    </div>
  );
}

export default Login;
