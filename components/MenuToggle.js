import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/MenuToggle.module.css'
import MobileMenuItems from './MobileMenuItems';

export const MenuToggle = () => {

  const [showMenu, setShowMenu] = useState(false);


  // Variants for the menu when the burger icon is being clicked
  const menuVariants = {
    show: {
      display: 'block',
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    },
    hide: {
      x: '100vw',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div onClick={() => {
      if(!showMenu) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    }} className={styles.menu}>
      <motion.div variants={menuVariants} initial="hide" animate={showMenu ? 'show' : 'hide'} className={styles.backDiv}>
        <MobileMenuItems />
      </motion.div>
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}></div>
    </div>
  )
}

export default MenuToggle
