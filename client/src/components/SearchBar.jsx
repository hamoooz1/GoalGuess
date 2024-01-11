import React, { useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import "../styles/searchbar.scss";
import axios from "axios";
import { useState } from "react";

export default function SearchBar() {

  const [footballers, setFootballers] = useState([])

  

  useEffect(() => {
    axios('/api/footballers')
      .then(response => {
        setFootballers(response.data);
      })
  }, [])

  console.log(footballers)

  return (
    <div className="input-wrapper">
      <FaSearch />
      <input placeholder="Search Player"/>
    </div>
  )
}