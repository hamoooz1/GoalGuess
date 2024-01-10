import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/play.scss";

function Play () {

  const [guessCount, setGuesserCounter] = useState(0)

  return (
    <>
    <NavBar />
    <div className="playing-layout">
      <h1>Goal Guess</h1>
      <h2>Premier Soccer Player Guessing Game</h2>
      <p>{guessCount} of 8 guesses</p>
    </div>
    <textarea className="searchbar">

    </textarea>
    <div className="grid-container">
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex}>
          {[...Array(6)].map((_, colIndex) => (
            <div key={colIndex} className="grid-item"> G</div>
          ))}
        </div>
      ))}
    </div>
  </>

  )
}

export default Play;