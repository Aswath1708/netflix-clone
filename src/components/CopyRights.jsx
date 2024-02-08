import React from "react";
import styles from '../styles/components/CopyRights.module.css';

const CopyRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyRights}>
      <button>Service Code</button>
      <p> &copy; 1997-{currentYear} Netflix, Inc.</p>
    </div>
  );
};

export default CopyRights;
