import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "../styles/searchbar.scss";
import PlayerDropdown from "./PlayerDropdown";

export default function SearchBar(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInput = (value) => {
    props.handleSearchInput(value);
    setShowDropdown(true);
  };

  const selectFootballer = (player) => {
    props.handleSelectFootballer(player)
    setShowDropdown(false);
    props.incrementCounter(props.guessCount);
    console.log("Selected player:", player);
  }

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
    <PlayerDropdown showDropdown={showDropdown} footballers={props.footballers} selectFootballer={selectFootballer}/>
      </>
  );
}
