import React from "react";
import { getNavList } from "../utils/getNavList";
import styles from "../styles/components/BrowseMenu.module.css";

const BrowseMenu = ({setHideMenu}) => {
  const navList = getNavList();

  return (
    <ul className={styles.browseMenu} onMouseEnter={()=>setHideMenu(true)} onMouseLeave={()=>setHideMenu(false)}>
      {navList.map((item, i) => {
        return (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default BrowseMenu;
