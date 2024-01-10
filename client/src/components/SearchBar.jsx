import React from "react"
import { FaSearch } from "react-icons/fa"
import "../styles/searchbar.scss";


export default function SearchBar() {


  return (
    <div className="input-wrapper">
      <FaSearch />
      <input placeholder="Search Player"/>
    </div>
  )
}