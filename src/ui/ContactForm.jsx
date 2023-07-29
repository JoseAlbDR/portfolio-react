import { useRef } from 'react'
import './ContactForm.scss'
import LinkButton from './LinkButton'
import { sendEmail } from '../services/sendEmail'
import ReCAPTCHA from 'react-google-recaptcha'
function ContactForm() {
  const form = useRef()

  return (
    <form
      ref={form}
      onSubmit={(e) => sendEmail(e, form)}
      className="contact-form"
      method="POST"
    >
      <input
        className="contact-name"
        type="text"
        name="user_name"
        placeholder="Name"
      />
      <input
        className="contact-mail"
        type="mail"
        name="user_email"
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
      <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} />

      <LinkButton className="send-button">SEND</LinkButton>
    </form>
  )
}

export default ContactForm
