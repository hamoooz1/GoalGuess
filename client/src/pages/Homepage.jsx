import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import "../styles/homepage.scss";
import "../styles/navBar.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import BackgroundVideo from "../components/BackgroundVideo";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter";
import Footer from "../components/footer";

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
      <Footer />
    </article>
  );
}

export default Homepage;
