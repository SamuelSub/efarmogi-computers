import React, { useState } from 'react';
import navStyles from '../styles/navbar.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {

  const [isOpen, setIsOpen] = useState('false');

  const iconVariants = {
    opened: {
      
    },
    closed: {
      
    }
  }

  return (
    <nav className={navStyles.navbar} >
      <h1 className={navStyles.logo}>Efarmogi Computers</h1>
      <ul>
        <li><Link href="/">Αρχική</Link></li>
        <li><Link href="/company">Η Εταιρία</Link></li>
        <li><Link href="/services">Υπηρεσίες</Link></li>
        <li><Link href="/contact">Επικοινωνία</Link></li>
      </ul>
      <div className={navStyles.burgerContainer}>
        <motion.div initial={false} variants={iconVariants} animate={isOpen ? 'opened' : 'closed'} onClick={() => setIsOpen(state => !state)} className={navStyles.burgerIcon} ></motion.div>
      </div>
    </nav>
  )
}

export default Nav
