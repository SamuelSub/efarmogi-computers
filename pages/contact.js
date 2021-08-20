import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import location from '../public/location.svg'
import email from '../public/email.svg'
import phone from '../public/phone.svg'

export const contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <h2 className={styles.mainHeading} id="contact">Επικοινωνία</h2>
      <h3 className={styles.location}><Image src={location} alt="location" width={25} height={25}/> Τοποθεσία</h3>
      <p>Πλατεία Κωνσταντινουπόλεως 6 & Μάνου Κατράκη 1, 81101 Μυτιλήνη</p>
      <iframe style={{
        width: '80vw',
        height: '60vh'
      }}
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.production.local.API_KEY}&q=Efarm0g1+Computers`}allowFullScreen>
      </iframe>
      <h3 className={styles.email}><Image src={email} alt="email contact" width={25} height={25}/> E-mail</h3>
      <p>efarmogi.taxidis@gmail.com</p>
      <h3 className={styles.phone}><Image src={phone} alt="phone contact" width={25} height={25}/> Τηλέφωνο Επικοινωνίας</h3>
      <p>698 092 6921</p>
      <p>22510 42350</p>
      <p>22510 46308</p>
    </div>
  )
}

export default contact