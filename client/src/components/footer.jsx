import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

import goalGuessLogo from "../goalGuessLogo.png";
import AnimatedTextWord from "./AnimatedTextWord";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/hamoooz1/GoalGuess">GITHUB</a>
    </div>
  );
}

export default Footer;
