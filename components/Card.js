import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import itSupport from '../public/it-support.png'
import service from '../public/service.png'
import products from '../public/products.png'

export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>IT Support <Image src={itSupport} width={25} height={25}/></h2>
        <p className={styles.cardParagraph}>Υποστήριξη τεχνικων υπηρεσιων πληροφορικης στον χωρο εργασιας σας.</p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>Service Η/Υ <Image src={service} width={25} height={25}/></h2>
        <p className={styles.cardParagraph}>Προσφέρουμε τεχνικες υπηρεσιες για υπολογιστες, λαπτοπ, ταμπλετ και τηλεφωνα.</p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>Προιοντα <Image src={products} width={25} height={25}/></h2>
        <p className={styles.cardParagraph}>Στο καταστημα μας θα βρειτε μια πληθωρα επιλογων απο ηλεκτρονικες συσκευες για να καλυψετε την καθε σας αναγκη.</p>
      </div>
    </div>
  )
}

export default Card