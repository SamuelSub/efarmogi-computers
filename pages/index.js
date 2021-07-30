import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Image from 'next/image';
import background from '../public/background.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Efarmogi Computers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
     
        <div className={styles.background}>
          <Image src={background} alt="background image" layout="fill" objectFit="cover" />
          <div className={styles.heroText}>
            <h1 className={styles.mainHeading}>Δειτε Τις Υπηρεσιες Μας!</h1>
            <h2 className={styles.heroDesc}>Έχει πρόβλημα το κινητό, ο υπολογιστής, το Laptop,το Tablet ή οποιαδήποτε άλλη συσκευή; Μπορούμε να την επισκευάσουμε με πρωταρχικό μας κριτήριο την ποιότητα.</h2>
          </div>
        </div>
        
      </main>
      
    </div>
  )
}
