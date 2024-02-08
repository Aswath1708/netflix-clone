import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../styles/components/Browse.module.css";
import BrowseMenu from "./BrowseMenu";

const Browse = () => {
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <div className={styles.browse}>
      <p
        onMouseOver={() => setViewMenu(true)}
        onMouseOut={() => setViewMenu(false)}
      >
        {" "}
        Browse
        <FontAwesomeIcon icon={faCaretDown} />
      </p>

      {viewMenu && <BrowseMenu />}
    </div>
  );
};

export default Browse;
