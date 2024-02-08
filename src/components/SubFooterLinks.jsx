import React from "react";
import { getFooterList } from "../utils/getFooterList";
import styles from "../styles/components/SubFooterLinks.module.css";

const SubFooterLinks = () => {
  const footerList = getFooterList();

  return (
    <ul className={styles.subFooterLinks}>
      {footerList.map((item, i) => {
        return (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SubFooterLinks;
