import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import SecondaryNavList from './SecondaryNavList'
import styles from '../styles/components/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo/>
      <NavList/>
      <SecondaryNavList/>
    </nav>
  )
}

export default NavBar