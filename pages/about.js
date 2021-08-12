import React from 'react'
import styles from '../styles/About.module.css'

export const about = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h2 className={styles.mainHeading}>Η Εταιρία</h2>
      <p className={styles.mainParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita obcaecati labore perferendis natus nulla ab possimus, inventore vel dolores voluptates explicabo, aut eius et, nostrum tempore facere saepe cupiditate reprehenderit.</p>
    </div>
  )
}

export default about