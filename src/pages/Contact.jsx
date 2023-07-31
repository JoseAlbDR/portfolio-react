import LoadingAnimation from '../animations/LoadingAnimation'
import ContactForm from '../ui/Contact/ContactForm'
import ContactInfo from '../ui/Contact/ContactInfo'
import ContactText from '../ui/Contact/ContactText'
import SectionTitle from '../ui/AppLayout/SectionTitle'

import './Contact.scss'
function Contact() {
  const title = 'Contact me'
  return (
    <>
      <LoadingAnimation type="pacman" />
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
    </>
  )
}

export default Contact
