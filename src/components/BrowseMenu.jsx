import React from "react";
import { getNavList } from "../utils/getNavList";
import styles from "../styles/components/BrowseMenu.module.css";

const BrowseMenu = () => {
  const navList = getNavList();
  return (
    <div className={styles.browseMenu}>
      {navList.map((item, i) => {
        return <li key={i}>
          <a href="#">{item}</a>
        </li>;
      })}
    </div>
  );
};

export default BrowseMenu;
