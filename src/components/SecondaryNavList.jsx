import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/components/SecondaryNavList.module.css";

const SecondaryNavList = () => {
  return (
    <div className={styles.secondaryNavList}>
      <FontAwesomeIcon icon={faSearch} className={styles.listIcon} />
      <FontAwesomeIcon icon={faBell} className={styles.listIcon} />
      <div>
        <FontAwesomeIcon icon={faUser} className={styles.listIcon}/>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default SecondaryNavList;
