import React from 'react'
import Link from 'next/link'
import styles from '../styles/MobileMenuItems.module.css'

const MobileMenuItems = () => {
  return (
    <div className={styles.itemsWrapper}>
      <ul className={styles.list}>
        <li><Link href="/"><a>Αρχική</a></Link></li>
        <li><Link href="/#services"><a>Υπηρεσίες</a></Link></li>
        <li><Link href="/#about"><a>Η Εταιρία</a></Link></li>
        <li><Link href="/#contact"><a>Επικοινωνία</a></Link></li>
      </ul>
    </div>
  )
}

export default MobileMenuItems
