import AnimatedLetters from '../animations/AnimatedLetters'
import { useAnimation } from '../hooks/useAnimation'
import ContactForm from '../ui/ContactForm'
import ContactText from '../ui/ContactText'
import './Contact.scss'
function Contact() {
  const title = 'Contact me'.split('')
  const { letterClass } = useAnimation(4)
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={title}
            idx={15}
          />
        </h1>
        <ContactText />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
