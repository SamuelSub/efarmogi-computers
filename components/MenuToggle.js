import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/MenuToggle.module.css'

export const MenuToggle = () => {

  return (
    <div className={styles.menu}>
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}></div>
    </div>
  )
}

export default MenuToggle
