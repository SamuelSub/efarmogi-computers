import styles from '../styles/ContactForm.module.css'
import emailjs from 'emailjs-com'

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()  
  }

  return (
    <form className={styles.contactForm} onSubmit={sendEmail}>
      
      <input type="text" name="name" id="name" placeholder="Όνομα" />

      <input type="text" name="email"  id="email" placeholder="Διεύθυνση email" />

      <input type="text" name="phone" id="phone" placeholder="Τηλέφωνο" />

      <input type="text" name="subject"  id="subject" placeholder="Θέμα"/>

      <textarea id="text" name="text" placeholder="Γράψτε το μύνημα σας εδω..."></textarea>

      <button type="submit">Αποστολή</button>
    </form>
  )
}

export default ContactForm
