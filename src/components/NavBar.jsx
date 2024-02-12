import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import SecondaryNavList from "./SecondaryNavList";
import styles from "../styles/components/NavBar.module.css";
import Browse from "./Browse";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={(scrolling ? styles.scrolled : styles.navBar)}>
      <Logo />
      <NavList />
      <Browse />
      <SecondaryNavList />
    </nav>
  );
};

export default NavBar;
