import { useRef, useState } from 'react'
import './ContactForm.scss'
import LinkButton from './LinkButton'
import { sendEmail } from '../services/sendEmail'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()
  const captchaRef = useRef(null)

  function reset() {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  async function handleSubmit(e, form) {
    let token = captchaRef.current.getValue()
    console.log(token)

    // if (token) {
    //   let validToken = await verifyToken(token)
    //   if (validToken.success) {
    //     sendEmail(e, form)
    //     reset()
    //   } else {
    //     throw new Error('Invalid token')
    //   }
    // }

    sendEmail(e, form)
    reset()
  }

  return (
    <form
      ref={form}
      onSubmit={(e) => handleSubmit(e, form)}
      className="contact-form"
      method="POST"
    >
      <input
        className="contact-name"
        type="text"
        name="user_name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="contact-mail"
        type="email"
        name="user_email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="contact-subject"
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        className="contact-message"
        name="message"
        id="message"
        placeholder="Message"
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <ReCAPTCHA
        sitekey="6LdJXGYnAAAAAGhjLq6wplTaDc4Um_1NeBioHAA5"
        ref={captchaRef}
      />

      <LinkButton className="send-button">SEND</LinkButton>
    </form>
  )
}

export default ContactForm
