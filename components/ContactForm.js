// import { useState } from 'react';
// import styles from '../styles/ContactForm.module.css'

// const ContactForm = () => {

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phone, setPhone] = useState();
//   const [subject, setSubject] = useState();
//   const [text, setText] = useState();

//   const submitContactForm = () => {
//     let data = {
//       name,
//       email,
//       phone,
//       subject,
//       text
//     }

//     fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then((res) => {
//       if(res.status === 200) {
//         setName('');
//         setEmail('');
//         setPhone('');
//         setSubject('');
//         setText('');
//       }
//     })
//   }

//   return (
//     <form className={styles.contactForm} onSubmit={submitContactForm}>
      
//       <input type="text" name="name" id="name" placeholder="Όνομα" onChange={(e) => setName(e.target.value)}/>

//       <input type="text" name="email"  id="email" placeholder="Διεύθυνση email" onChange={(e) => setEmail(e.target.value)}/>

//       <input type="text" name="phone" id="phone" placeholder="Τηλέφωνο" onChange={(e) => setPhone(e.target.value)}/>

//       <input type="text" name="subject"  id="subject" placeholder="Θέμα" onChange={(e) => setSubject(e.target.value)}/>

//       <textarea id="text" placeholder="Γράψτε το μύνημα σας εδω..." onChange={(e) => setText(e.target.value)}></textarea>

//       <button type="submit">Send</button>
//     </form>
//   )
// }

// export default ContactForm
