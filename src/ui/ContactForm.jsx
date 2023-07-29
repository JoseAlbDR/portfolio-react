import './ContactForm.scss'
function ContactForm() {
  return (
    <form className="contact-form">
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
    </form>
  )
}

export default ContactForm
