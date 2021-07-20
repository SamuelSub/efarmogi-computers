import React from 'react'
import navStyles from '../styles/navbar.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <h1 className={navStyles.logo}>Efarmogi Copmuters</h1>
      <ul>
        <li>Αρχική</li>
        <li>Η Εταιρία</li>
        <li>Υπηρεσίες</li>
        <li>Επικοινωνία</li>
      </ul>
      <div className={navStyles.hamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}

export default Nav
