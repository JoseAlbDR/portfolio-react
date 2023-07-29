import ContactForm from '../ui/ContactForm'
import ContactInfo from '../ui/ContactInfo'
import ContactText from '../ui/ContactText'
import SectionTitle from '../ui/SectionTitle'

import './Contact.scss'
function Contact() {
  const title = 'Contact me'.split('')
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <SectionTitle title={title} />
        <ContactText />
        <ContactForm />
      </div>
      <div className="contact-info">
        <ContactInfo />
      </div>
    </div>
  )
}

export default Contact
