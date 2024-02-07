import React from 'react'
import logo from '../assets/netflix_logo.png'
import styles from '../styles/components/Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <img src={logo} alt="netflix" />
    </div>
  )
}

export default Logo