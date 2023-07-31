import LoadingAnimation from '../animations/LoadingAnimation'
import ContactForm from '../ui/Contact/ContactForm'
import ContactInfo from '../ui/Contact/ContactInfo'
import ContactText from '../ui/Contact/ContactText'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import Container from '../ui/AppLayout/Container'

import './Contact.scss'
import TextZone from '../ui/AppLayout/TextZone'
function Contact() {
  const title = 'Contact me'
  return (
    <>
      <LoadingAnimation type="pacman" />
      <Container type="contact">
        <TextZone>
          <SectionTitle title={title} />
          <ContactText />
          <ContactForm />
        </TextZone>
        <ContactInfo />
      </Container>
    </>
  )
}

export default Contact
