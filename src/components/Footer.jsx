import React from "react";
import SubFooterLinks from "./SubFooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import CopyRights from "./CopyRights";
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialMediaLinks />
      <SubFooterLinks />
      <CopyRights />
    </div>
  );
};

export default Footer;
