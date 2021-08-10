import React from 'react'
import styles from '../styles/Card.module.css'

export const Card = () => {
  return (
    <div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>IT Support</h2>
        <p className={styles.cardParagraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo nihil aspernatur commodi consequatur repellendus reprehenderit, perferendis doloremque hic in!</p>
      </div>
    </div>
  )
}

export default Card