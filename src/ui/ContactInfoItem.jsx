import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactInfoItem({ icon, url, title, color = '#fff' }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} color={color} />
      <a href={url} rel="noreferrer" target="_blank">
        <h3>{title}</h3>
      </a>
    </li>
  )
}

export default ContactInfoItem
