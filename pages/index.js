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
import { motion } from 'framer-motion'
import { useState } from 'react';

export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  // Variants for the main heading

  const mainHeadingVariants = {
    visible: {
      ease: 'easeInOut',
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    },
    hidden: {
      y: 30,
      opacity: 0
    }
  }

  // Variants for the main image

  const backImageVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
      y: -20
    }
  }

  const ctaVariants = {
    clicked: {
      opacity: 1
    },
    notClicked: {
      opacity: 1
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Efarmogi Computers</title>
        <meta charSet="UTF-8"></meta>
      </Head> 
      <section> {/* Change this to body tag before commit */}
        <Navbar />
        <div className={styles.heroSection}>
          <motion.div variants={backImageVariants} initial="hidden" animate="visible" className={styles.img}>
            <Image src={heroImage} alt="main image" quality={30} priority/>
          </motion.div>

          <div className={styles.ctaWrapper}>
            <motion.h1 initial="hidden" animate="visible" variants={mainHeadingVariants} className={styles.mainHeading}>Χρειάζεσαι Άμεσα Τεχνική Υποστήριξη Για Την Επιχείρηση Σου;</motion.h1>

            <Link href="/#contact" passHref><motion.a variants={ctaVariants} initial="notClicked" animate={isClicked ? 'clicked' : 'notClicked'} onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true)} className={styles.cta}>Καλέστε Μας!</motion.a></Link>
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
      </section>
    </div>
  )
}