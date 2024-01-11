import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/play.scss";
import SearchBar
 from "../components/SearchBar";
function Play () {

  const [guessCount, setGuesserCounter] = useState(0);
  const [listOfGuesses, setListOfGuesses] = useState([{},{},{},{},{},{}]);
  

  function incrementCounter (guessCount) {
    if (guessCount < 6) {
      setGuesserCounter(guessCount + 1)
    } else {
      setGuesserCounter(0)
    }
  }

  return (
    <>
    <div className="playing-layout">
      <h1>Goal Guess</h1>
      <h2>Premier Soccer Player Guessing Game</h2>
      <p>{guessCount} of 6 guesses</p>
       <SearchBar guessCount={guessCount}
         incrementCounter={incrementCounter} 
         setListOfGuesses={setListOfGuesses}
         className="input-bar"
         />
    </div>

    <div className="grid-container">
      {listOfGuesses.map((_, rowIndex) => (
        <div key={rowIndex}>
          {[...Array(6)].map((_, colIndex) => (
            <div key={colIndex} className="grid-item"></div>
          ))}
        </div>
      ))}
    </div>
  </>

  )
}

export default Play;