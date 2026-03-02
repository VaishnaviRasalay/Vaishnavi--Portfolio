import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
   <div className='contact' id="contact">
  <h2>Contact</h2>

  <div className='formcontainer'>
      <input type='text' placeholder='Your Name' />
      <input type='email' placeholder='Your Email' />
      <textarea placeholder='Your Message'></textarea>
      <button className="contact-btn">Send Message</button>
  </div>

  <div className='sociallinks'>
      <a href="https://github.com/VaishnaviRasalay" target='_blank' rel="noopener noreferrer">GitHub</a>
      <a href='https://www.linkedin.com/in/rasalayvaishnavi/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
  </div>
</div>
  )
}

export default Contact
