import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from '../styles/components/Browse.module.css';

const Browse = () => {
  return (
    <div className={styles.browse}>
      Browse
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
};

export default Browse;
