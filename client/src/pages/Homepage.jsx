import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import "../styles/homepage.scss";
import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import BackgroundVideo from "../components/BackgroundVideo";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";
import Footer from "../components/Footer";
import PlayerStats from "../components/PlayerStats";
import StatsCentreNav from "../components/StatsCentreNav";

function Homepage() {
  return (
    <article className="homepage">
      <NavBar />

      <BackgroundVideo />
      <div className="content">
        <AnimatedTextCharacter
          className="homepage__title"
          text="GoalGuess"
          isInView="true"
        />
      </div>
      <StatsCentreNav />
      <PlayerStats />
      <Footer />
    </article>
  );
}

export default Homepage;
