import React from "react";
import { getNavList } from "../utils/getNavList";
import styles from "../styles/components/NavList.module.css";

const NavList = () => {
  const navList = getNavList();

  return (
    <ul className={styles.navList}>
      {navList.map((item, i) => (
        <li key={i}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
