import React from 'react'
import styles from '../styles/Logo.module.css'
import Head from 'next/head'

export const Logo = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <h2 className={styles.logo} >Efarmogi Computers</h2>
    </div>
  )
}

export default Logo
