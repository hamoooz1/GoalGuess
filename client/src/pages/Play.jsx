import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/play.scss";
import SearchBar
 from "../components/SearchBar";
function Play () {

  const [guessCount, setGuesserCounter] = useState(0);
  const [listOfGuesses, setListOfGuesses] = useState([{},{},{},{},{},{}]);
  
  const [footballers, setFootballers] = useState([]);
  const [allFootballers, setAllFootballers] = useState([]);
  const [selectedFootballer, setSelectedFootballer] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [randomFootballer, setRandomFootballer] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);
  
  const [win, setWin] = useState(null);

  const handleSelectFootballer = (player) => {
    setSelectedFootballer(player);
  }

  const handleSearchInput = (value) => {
    setSearchInput(value);
  }

  const chooseRandomPlayer = () => {
    const randomIndex = Math.floor(Math.random() * allFootballers.length);
    const randomPlayer = allFootballers[randomIndex];
    setRandomFootballer(randomPlayer);
  };

  useEffect(() => {
    axios
      .get("/api/footballers")
      .then((response) => {
        const results = response.data;
        setFootballers(results);
        setAllFootballers(results);
        setIsDataFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching footballers:", error);
      });
  }, []);

  useEffect(() => {
    if (isDataFetched) {
      chooseRandomPlayer();
    }
  }, [isDataFetched]);

  useEffect(() => {
    const filteredResults = allFootballers.filter((player) =>
      player.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFootballers(filteredResults);
  }, [searchInput, allFootballers]);

  function incrementCounter (guessCount) {
    if (guessCount < 6) {
      setGuesserCounter(guessCount + 1)
    } else {
      setGuesserCounter(0)
    }
  }

  //logic for comparing selected vs target
  const targetPlayer = allFootballers[2]; //Random id

  const checkGuessArray = [];

  const checkGuess = function(targetPlayer, selectedFootballer) {
    if (targetPlayer.id !== selectedFootballer.id) {
      for (const prop in targetPlayer) {
        if (prop !== 'id' && prop !== 'league' && prop !== 'image') {
          checkGuessArray.push(targetPlayer[prop] == selectedFootballer[prop]);
        }
      }
      return checkGuessArray;

    } else {
      return true;
    }
  };

  return (
    <>
    <div className="playing-layout">
      <h1>Goal Guess</h1>
      <h2>Premier Soccer Player Guessing Game</h2>
      <p>{guessCount} of 6 guesses</p>
       <SearchBar guessCount={guessCount}
         incrementCounter={incrementCounter} 
         handleSearchInput={handleSearchInput}
         handleSelectFootballer={handleSelectFootballer}
         footballers={footballers}
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