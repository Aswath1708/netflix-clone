import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styles from "../styles/components/SecondaryNavList.module.css";
import SearchBar from "./SearchBar";

const SecondaryNavList = () => {

  const [showSearchBar,setShowSearchBar] = useState(false);

  // const searchBar = useRef();


  // const showSearchBar = () =>{
  //   searchBar.current.style.width="100%";
  // }

  return (
    <div className={styles.secondaryNavList}>
      {!showSearchBar ? (
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.listIcon}
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
      ) : (
        <SearchBar setShowSearchBar={setShowSearchBar}/>
      )}

      {/* <div className={styles.searchBar}>
      <FontAwesomeIcon icon={faSearch} onClick={showSearchBar}/>
    <input type="text" placeholder="Titles, peoples, genres" ref={searchBar}/>
      </div> */}

      <FontAwesomeIcon icon={faBell} className={styles.listIcon} />
      <div>
        <FontAwesomeIcon icon={faUser} className={styles.listIcon} />
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default SecondaryNavList;
