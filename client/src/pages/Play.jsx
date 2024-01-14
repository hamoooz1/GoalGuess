import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



import WinLossModal from "../components/WinLossModal";
import WinLossBackdrop from "../components/WinLossBackdrop";
import {useState, useEffect} from "react";
import {useModal} from "../providers/ModalProvider";

import axios from "axios";
import "../styles/play.scss";
import SearchBar
  from "../components/SearchBar";
function Play(props) {


  const {user} = useAuth();

  const user_id = user?.id;

  // const {win, lose,
  //   handleWin,
  //   handleLose,
  //   clearWinLoseState, } = useModal();

  const [guessCount, setGuesserCounter] = useState(0);




  const [listOfGuesses, setListOfGuesses] = useState([]);


  const [footballers, setFootballers] = useState([]);
  const [allFootballers, setAllFootballers] = useState([]);
  const [selectedFootballer, setSelectedFootballer] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const [randomFootballer, setRandomFootballer] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const [isWinLossModalOpen, setIsWinLossModalOpen] = useState(false);

  const [win, setWin] = useState(null);

  /**
   * Every time selectedFootballer changes, this code will run
   * 1. Add an object to the listOfGuesses and the object
   *    will have a key of the selectedPlayer's info with the value
   *    being a boolean.
   * 2. Check if they won 
   */

  useEffect(() => {
    if (selectedFootballer) {
      checkGuessAndUpdateList(randomFootballer, selectedFootballer);
      console.log("theuse effect ran", listOfGuesses);
      checkGameResult(guessCount, randomFootballer, selectedFootballer);
    }
  }, [selectedFootballer]);

  const handleSelectFootballer = (player) => {
    setSelectedFootballer(player);
  };

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  const chooseRandomPlayer = () => {
    const randomIndex = Math.floor(Math.random() * allFootballers.length);
    const randomPlayer = allFootballers[randomIndex];
    setRandomFootballer(randomPlayer);
  };

  const openWinLossModal = () => {
    setTimeout(() => {
      setIsWinLossModalOpen(true);
    }, 900);
  };

  const closeWinLossModal = () => {
    setGuesserCounter(0);
    setListOfGuesses([]);
    setSelectedFootballer(null);
    clearWinLoseState();
    chooseRandomPlayer();
    setIsWinLossModalOpen(false);
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


  // useEffect(() => {
  //   if (win !== 0 || lose !== 0) {
  //     openWinLossModal();
  //   }
  // }, [win, lose]);



  useEffect(() => {
    if (win !== null) {
      openWinLossModal();
      let win_count = 0;
      let lose_count = 0;

      if (win) {
        win_count = 1;
      } else {
        lose_count = 1;
      }
      axios
        .post("/api/stats", {user_id, win_count, lose_count, totalGames})
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error("Error adding stats:", error);
        });

    }
  }, [win]);

  function incrementCounter(guessCount) {
    if (guessCount < 5) {
      setGuesserCounter(guessCount + 1);
    } else {
      setWin(false);

    }
  }

  const checkGuessAndUpdateList = function(targetPlayer, selectedFootballer) {
    let tempobj = {};

    for (const prop in targetPlayer) {
      if (prop !== 'id' && prop !== 'league') {
        tempobj[prop] = {
          boolean: targetPlayer[prop] == selectedFootballer[prop],
          selected: selectedFootballer[prop],
        };
      }
    }

    setListOfGuesses((prev) => {
      const newList = [...prev, tempobj];
      return newList;
    });

  };


  // const checkGameResult = (guessCount, targetPlayer, selectedFootballer) => {
  //   if (guessCount < 6) {

  //     if (targetPlayer.id == selectedFootballer.id) {
  //       handleWin();
  //       return;
  //     }
  //   }
  //   if (guessCount == 6) {
  //     handleLose();
  //     return;
  //   };
  // };
  const renderArrow = (number, guess) => {
    if (randomFootballer[number] > guess[number].selected) {
      return <>↑</>;
    } else if (randomFootballer[number] < guess[number].selected) {
      return <>↓</>;
    } else {
      return null;
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

        {listOfGuesses?.map((guess, rowIndex) => (
          <div className="grid-answers" key={rowIndex}>
            {guess.name && guess.nationality && guess.flag_img && guess.team && guess.team_img && guess.position && guess.number && guess.age && (
              <>
                <div className={`grid-item ${guess.name.boolean ? 'true' : 'false'}`}><img src={guess.image.selected} /></div>
                <div className={`grid-item ${guess.nationality.boolean ? 'true' : 'false'}`}><img className="flag-image" src={guess.flag_img.selected} /></div>
                <div className={`grid-item ${guess.team.boolean ? 'true' : 'false'}`}><img src={guess.team_img.selected} /></div>
                <div className={`grid-item ${guess.position.boolean ? 'true' : 'false'}`}>{guess.position.selected}</div>
                <div className={`grid-item ${guess.age.boolean ? 'true' : 'false'}`}>
                  Age: {guess.age.selected} {renderArrow('age', guess)}
                </div>
                <div className={`grid-item ${guess.number.boolean ? 'true' : 'false'}`}>
                  Number: {guess.number.selected} {renderArrow('number', guess)}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {isWinLossModalOpen && (
        <>
          <WinLossBackdrop onClick={closeWinLossModal} randomFootballer={randomFootballer} />
          <WinLossModal closeModal={closeWinLossModal} win={win} lose={lose} randomFootballer={randomFootballer} />
        </>
      )}

    </>

  );

}

export default Play;




useEffect(() => {
  if (win !== null) {
    openWinLossModal();
    let win_count = 0;
    let lose_count = 0;

    if (win) {
      win_count = 1;
    } else {
      lose_count = 1;
    }
    axios
      .post("/api/stats", {user_id, win_count, lose_count, totalGames})
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error("Error adding stats:", error);
      });

  }
}, [win]);
