import React, { useState } from 'react';
import navStyles from '../styles/navbar.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {

  const [isShowing, setIsShowing] = useState(false);

  const iconVariants = {
    hideMenu: {
      backgroundColor: 'white'
    },
    showMenu: {
      backgroundColor: 'white',
      position: 'absolute',
      width: '100%',
      right: 0,
      top: 0,
      height: '100%'
    }
  }

  return (
    <nav className={navStyles.navbar} >
      <motion.h1 className={navStyles.logo}>Efarmogi Computers</motion.h1>
      <ul>
        <li><Link href="/">Αρχική</Link></li>
        <li><Link href="/company">Η Εταιρία</Link></li>
        <li><Link href="/services">Υπηρεσίες</Link></li>
        <li><Link href="/contact">Επικοινωνία</Link></li>
      </ul>
      <div className={navStyles.burgerContainer}>
        <motion.div className={navStyles.burgerIcon}
          variants={iconVariants}
          initial="hideMenu"
          animate={isShowing ? 'showMenu' : 'hideMenu'}
          onClick={() => {
            if(isShowing) {
              setIsShowing(false)
            } else {
              setIsShowing(true)
            }
          }}
        ></motion.div>
      </div>
    </nav>
  )
}

export default Nav
