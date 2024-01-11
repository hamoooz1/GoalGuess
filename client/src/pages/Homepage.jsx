import React, {useState} from "react";

import NavBar from "../components/NavBar";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";
import BackgroundVideo from "../components/BackgroundVideo";

import Login from "./Login";
import Signup from "./Signup";

import "../styles/homepage.scss";

import Footer from "../components/Footer";
import PlayerStats from "../components/PlayerStats";
import StatsCentreNav from "../components/StatsCentreNav";

import {useAuth} from "../providers/AuthProvider";
import Play from "./Play";

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

  function handleHome() {
    setPage('home');
  }

  function handleLoginClick() {
    setPage('login');
  }

  function handleSignupClick() {
    setPage('signup');
  }

  function handlePlay() {
    setPage('play');
  }

  return (
    <article className="homepage">
      <NavBar
        user={user}
        logout={handleLogout}
        done={() => setPage('home')}
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
        handleHome={handleHome}
      />

      {page == "login" && <Login done={() => setPage('home')} handleSignupClick={handleSignupClick} />}
      {page == "signup" && <Signup done={() => setPage('home')} handleLoginClick={handleLoginClick} />}
      {page == "play" && <Play />}

      {page == 'home' &&
        <>
          <BackgroundVideo />
          <div className="content">
            <AnimatedTextCharacter
              className="homepage__title"
              text="GoalGuess"
              isInView="true"
              handlePlay={handlePlay}
            />
            <button onClick={() => handlePlay()} className="btn">PLAY</button>
          </div>
          <StatsCentreNav />
          <PlayerStats />

        </>
      }
      <Footer />
    </article>
  );
}

export default Homepage;
