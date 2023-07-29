import { useRef } from 'react'
import './ContactForm.scss'
import LinkButton from './LinkButton'
import emailjs from '@emailjs/browser'
function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm()
  }

  return (
    <form method="POST" className="contact-form">
      <input
        className="contact-name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className="contact-mail"
        type="mail"
        name="email"
        placeholder="Email"
      />
      <input
        className="contact-subject"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        className="contact-message"
        name="message"
        id="message"
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>
      <LinkButton className="send-button">SEND</LinkButton>
    </form>
  )
}

export default ContactForm
