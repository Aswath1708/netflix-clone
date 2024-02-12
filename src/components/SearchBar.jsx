import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/components/SearchBar.module.css";

const SearchBar = ({setShowSearchBar}) => {

    const handleOutOfFocus = () =>{
        setShowSearchBar(false);
    }

  return (<div className={styles.searchBar} onBlur={handleOutOfFocus}>
    <FontAwesomeIcon icon={faSearch} />
    <input type="text" placeholder="Titles, peoples, genres" />
  </div>)
};

export default SearchBar;
