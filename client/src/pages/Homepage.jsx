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
import About from "../components/About";

import {useAuth} from "../providers/AuthProvider";
import {useModal} from "../providers/ModalProvider";
import Play from "./Play";

import HowToPlayModal from "../components/HowToPlayModal";
import ModalBackdrop from "../components/ModalBackdrop";
import LeaderboardModal from "../components/LeaderboardModal";

function Homepage() {
  const {user, logout} = useAuth();

  const {isHowToPlayModalOpen,
    isLeaderboardModalOpen,
    openHowToPlayModal,
    closeHowToPlayModal,
    openLeaderboardModal,
    closeLeaderboardModal} = useModal();

  const [page, setPage] = useState('home');

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

  function handlePage(page) {
    setPage(`${page}`)
  }

  function handleBio() {
    setPage('about')
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
        isHowToPlayModal={isHowToPlayModalOpen}
        openHowToPlayModal={openHowToPlayModal}
        isLeaderboardModalOpen={isLeaderboardModalOpen}
        openLeaderboardModal={openLeaderboardModal}

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
            <button onClick={() => handlePlay()} className="btn btn_home">PLAY</button>
          </div>
          <StatsCentreNav />
          <PlayerStats />
        </>
      }
      {page == "about" && <About />}
      <Footer handleBio={handleBio}/>

      {isHowToPlayModalOpen && (
        <>
          <HowToPlayModal closeHowToPlayModal={closeHowToPlayModal} />
          <ModalBackdrop closeHowToPlayModal={closeHowToPlayModal} />
        </>
      )}

      {isLeaderboardModalOpen && (
        <>
          <LeaderboardModal closeLeaderboardModal={closeLeaderboardModal} />
          <ModalBackdrop closeLeaderboardModal={closeLeaderboardModal} />
        </>
      )}
    </article>
  );
}

export default Homepage;
