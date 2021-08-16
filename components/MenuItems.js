import React from 'react'
import styles from '../styles/MenuItems.module.css'
import Link from 'next/link'
import index from '../pages/index'

const MenuItems = () => {
  return (
    <div className={styles.itemsWrapper}>
      <ul>
        <li><Link href="/"><a>Αρχική</a></Link></li>
        <li><Link href="/#services"><a>Υπηρεσίες</a></Link></li>
        <li><Link href="/#about"><a>Η Εταιρία</a></Link></li>
        <li><Link href="/#contact"><a>Επικοινωνία</a></Link></li>
      </ul>
    </div>
  )
}

export default MenuItems
