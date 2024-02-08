import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import SecondaryNavList from './SecondaryNavList'
import styles from '../styles/components/NavBar.module.css'
import Browse from './Browse'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo/>
      <NavList/>
      <Browse/>
      <SecondaryNavList/>
    </nav>
  )
}

export default NavBar