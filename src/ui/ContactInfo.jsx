import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ContactInfoItem from './ContactInfoItem'

function ContactInfo() {
  return (
    <ul>
      <ContactInfoItem
        icon={faGithub}
        url="https://github.com/JoseAlbDR"
        title="GitHub"
      />
    </ul>
  )
}

export default ContactInfo
