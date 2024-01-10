import React, {useState} from "react";

import NavBar from "../components/NavBar";
import BackgroundVideo from "../components/BackgroundVideo";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";


import Login from "./Login";
import Signup from "./Signup";

import "../styles/homepage.scss";

import {useAuth} from "../providers/AuthProvider";


import BackgroundVideo from "../components/BackgroundVideo";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";
import Footer from "../components/Footer";


function Homepage() {
  const {user, logout} = useAuth();

  // const [page, setPage] = useState(user ? 'home' : 'login');
  const [page, setPage] = useState('home');

  // const user = null;
  // const logout = null;
  function handleLogout(e) {
    e.preventDefault();
    logout();
    setPage('home');
  }

  function handleLoginClick() {
    setPage('login');
  }

  function handleSignupClick() {
    setPage('signup');
  }

  return (
    <article className="homepage">
      <NavBar
        user={user}
        logout={handleLogout}
        done={() => setPage('home')}
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />

      {page == "login" && <Login done={() => setPage('home')} />}
      {page == "signup" && <Signup done={() => setPage('home')} />}

      {page == 'home' &&
        <>
          <BackgroundVideo />
          <div className="content">
            <AnimatedTextCharacter
              className="homepage__title"
              text="GoalGuess"
              isInView="true"
            />
          </div>
        </>
      }
      <Footer />
    </article>
  );
}

export default Homepage;
