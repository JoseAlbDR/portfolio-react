import './ContactInfo.scss'
import {
  faCodepen,
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import ContactInfoItem from './ContactInfoItem'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactInfo() {
  const socialMedia = [
    {
      icon: faGithub,
      url: 'https://github.com/JoseAlbDR',
      title: 'GitHub',
      color: '#EC4D28',
    },
    {
      icon: faEnvelope,
      url: 'mailto:jaderodev@gmail.com',
      title: 'Email',
      color: '#d6ce91',
    },
    {
      icon: faFacebook,
      url: 'https://www.facebook.com/jdelgadorobles',
      title: 'Facebook',
      color: '#431def',
    },
    {
      icon: faDiscord,
      url: 'https://discord.com/app/469452782303313921',
      title: 'Discord',
      color: '#28A4D9',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/jalbertodelgado/',
      title: 'LinkedIn',
      color: '#1c7ed6',
    },
    {
      icon: faCodepen,
      url: 'https://www.linkedin.com/in/jalbertodelgado/',
      title: 'CodeSandBox',
      color: '#fff',
    },
  ]

  return (
    <ul className="contact-list">
      {socialMedia.map((item, i) => (
        <ContactInfoItem
          key={i}
          icon={item.icon}
          url={item.url}
          title={item.title}
          color={item.color}
        />
      ))}
    </ul>
  )
}

export default ContactInfo