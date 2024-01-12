import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/play.scss";
import SearchBar
  from "../components/SearchBar";
function Play() {

  const [guessCount, setGuesserCounter] = useState(0);
  const [listOfGuesses, setListOfGuesses] = useState([{}, {}, {}, {}, {}, {}]);

  const [footballers, setFootballers] = useState([]);
  const [allFootballers, setAllFootballers] = useState([]);
  const [selectedFootballer, setSelectedFootballer] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const [win, setWin] = useState(null);

  useEffect(() => {
    setListOfGuesses(checkGuessArray);
  }, [listOfGuesses])


  const handleSelectFootballer = (player) => {
    setSelectedFootballer(player);
  }

  const handleSearchInput = (value) => {
    setSearchInput(value);
  }

  useEffect(() => {
    axios
      .get("/api/footballers")
      .then((response) => {
        const results = response.data;
        setFootballers(results);
        setAllFootballers(results);
      })
      .catch((error) => {
        console.error("Error fetching footballers:", error);
      });
  }, []);

  useEffect(() => {
    const filteredResults = allFootballers.filter((player) =>
      player.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFootballers(filteredResults);
  }, [searchInput, allFootballers]);


  function incrementCounter(guessCount) {
    if (guessCount < 6) {
      setGuesserCounter(guessCount + 1)
    } else {
      setGuesserCounter(0)
    }
  }

  //logic for comparing selected vs target
  const targetPlayer = allFootballers[9]; //Random id
  let checkGuessArray = [];


  const checkGuess = function (targetPlayer, selectedFootballer) {
    if (targetPlayer?.id !== selectedFootballer?.id) {
      let tempobj = {};
      for (const prop in targetPlayer) {
       
        //console.log(prop);
        if (prop !== 'id' && prop !== 'league' && prop !== 'image') {
          //checkGuessArray.push(targetPlayer[prop] == selectedFootballer[prop]);
          //
          console.log("here",prop);

          tempobj[prop] = targetPlayer[prop] == selectedFootballer[prop];
        }
      }
      checkGuessArray.push(tempobj)
      return checkGuessArray;

    } else {
      return true;
    }
  };
  checkGuess(targetPlayer, allFootballers[1])
  checkGuess(targetPlayer, allFootballers[2])
  checkGuess(targetPlayer, allFootballers[3])
  checkGuess(targetPlayer, allFootballers[4])
  checkGuess(targetPlayer, allFootballers[5])
  checkGuess(targetPlayer, allFootballers[6])
  console.log(checkGuessArray)




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
        {checkGuessArray?.map((_, rowIndex) => (
          <div key={rowIndex}>
            {[...Array(6)].map((_, colIndex) => (
              <div key={colIndex} className="grid-item">{colIndex},{rowIndex}</div>
            ))}
          </div>
        ))}
      </div>

      {/**
              1. Set ListoFGuess in useeffect, populate it with checkGuessArray
              2. Replace above Grid container code 

               <div className="grid-container">
                {listOfGuesses?.forEach((arrayItem, rowIndex) => (
                  <div key={rowIndex}>
                    <div className="grid-item">{arrayItem.id} {allPlayers[rowIndex].id}</div>
                    <div className="grid-item">{arrayItem.name} {allPlayers[rowIndex].name}</div>
                    <div className="grid-item">{arrayItem.position} {allPlayers[rowIndex].name}</div>
                    <div className="grid-item">{arrayItem.league} {allPlayers[rowIndex].league}</div>
                    <div className="grid-item">{arrayItem.team} {allPlayers[rowIndex].team}</div>
                    <div className="grid-item">{arrayItem.age} {allPlayers[rowIndex].age}</div>
                    
                  </div>
                ))}
      </div>

      <div className="grid-container">
        {checkGuessArray?.map((_, rowIndex) => (
          <div key={rowIndex}>
            {[...Array(6)].map((_, colIndex) => (
              <div key={colIndex} className="grid-item">{colIndex},{rowIndex}</div>
            ))}
          </div>
        ))}
      </div>
            */}
    </>

  )
}

export default Play;