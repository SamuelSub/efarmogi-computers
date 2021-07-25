import React from 'react';
import navStyles from '../styles/navbar.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <h1 className={navStyles.logo}>Efarmogi Copmuters</h1>
      <ul>
        <li><Link href="/">Αρχική</Link></li>
        <li><Link href="/company">Η Εταιρία</Link></li>
        <li><Link href="/services">Υπηρεσίες</Link></li>
        <li><Link href="/contact">Επικοινωνία</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
