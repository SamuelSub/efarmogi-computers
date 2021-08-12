import React from 'react'
import styles from '../styles/MenuItems.module.css'

const MenuItems = () => {
  return (
    <div className={styles.itemsWrapper}>
      <ul>
        <li>Αρχική</li>
        <li>Υπηρεσίες</li>
        <li>Η Εταιρία</li>
        <li>Επικοινωνία</li>
      </ul>
    </div>
  )
}

export default MenuItems
