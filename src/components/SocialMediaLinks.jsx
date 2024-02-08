import React from "react";
import { getSocialMediaLinks } from "../utils/getSocialMediaLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/components/SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
  const socialMediaLinks = getSocialMediaLinks();

  return (
    <ul className={styles.socialMediaLinks}>
      {socialMediaLinks.map((link, i) => {
        return (
          <li key={i}>
            {" "}
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={link} />{" "}
            </a>{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
