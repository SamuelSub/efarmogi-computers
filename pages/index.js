import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Services from './services';
import heroImage from '../public/people.jpg'
import Image from 'next/image'
import Card from '../components/Card'
import Contact from './contact';
import About from './about';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Efarmogi Copmuters</title>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="UTF-8"></meta>
      </Head> 
      <body>
        <Navbar />

        <div className={styles.heroSection}>

          
          <div className={styles.img}>
            <Image src={heroImage} alt="main image" quality={30}/>
          </div>

          <div className={styles.ctaWrapper}>
            <h1 className={styles.mainHeading}>Χρειάζεσαι Άμεσα Τεχνική Υποστήριξη Για Την Επιχείρηση Σου;</h1>

            <Link href="/#contact"><a className={styles.cta}>Καλέστε Μας!</a></Link>
          </div>

       
          
        </div>
        
        <div className={styles.servicesWrapper}>
          <Services />
          <Card />
        </div>
        <About />
        <div className={styles.contactWrapper}>
          <Contact />
        </div>
        

      </body>
    </div>
  )
}