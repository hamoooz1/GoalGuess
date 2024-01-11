
import React, {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import "../styles/searchbar.scss";



function Play() {

  const [guessCount, setGuesserCounter] = useState(0);
  // const [selectedFootballer, setSelectedFootballer] = useState({});
  const [footballers, setFootballers] = useState([]);
  const [allFootballers, setAllFootballers] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // // const handleInput = (value) => {
  // //   setSearchInput(value);
  // //   setShowDropdown(true);
  // // };



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

  // // useEffect(() => {
  // //   const filteredResults = allFootballers.filter((player) =>
  // //     player.name.toLowerCase().includes(searchInput.toLowerCase())
  // //   );
  // //   setFootballers(filteredResults);
  // // }, [searchInput, allFootballers]);

  // const selectFootballer = (player) => {
  //   setSelectedFootballer(player);
  // };

  const selectedFootballer = allFootballers[41];

  const targetPlayer = allFootballers[42]; //Random id
  console.log('allFootballers', allFootballers);
  console.log('targetPlayer', targetPlayer);
  console.log('selectedFootballer', selectedFootballer);

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

  console.log('checkGuess', checkGuess(targetPlayer, selectedFootballer));

  return (
    <>
      <div className="playing-layout">
        <h1>Goal Guess</h1>
        <h2>Premier Soccer Player Guessing Game</h2>
        <p>{guessCount} of 8 guesses</p>
        {/* <SearchBar className="input-bar" /> */}
      </div>

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

  );
};

export default Play;