import React from 'react'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import MenuItems from './MenuItems'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <MenuToggle />
      <MenuItems />
    </nav>
  )
}

export default Navbar
