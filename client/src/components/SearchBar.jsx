import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "../styles/searchbar.scss";
import PlayerDropdown from "./PlayerDropdown";

export default function SearchBar(props) {
  const [footballers, setFootballers] = useState([]);
  const [selectedFootballer, setSelectedFootballer] = useState(null);
  const [allFootballers, setAllFootballers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInput = (value) => {
    setSearchInput(value);
    setShowDropdown(true);
  };

  const selectFootballer = (player) => {
    setSelectedFootballer(player);
    setShowDropdown(false);
    props.incrementCounter(props.guessCount);
    console.log("Selected player:", player);
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

  return (
    <>
    <div className="input-wrapper">
      <FaSearch />
      <input
        onChange={(e) => handleInput(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search Player"
        />
    </div>
    <PlayerDropdown showDropdown={showDropdown} footballers={footballers} selectFootballer={selectFootballer}/>
      </>
  );
}
