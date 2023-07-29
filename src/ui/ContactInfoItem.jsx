import './ContactInfoItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from './LinkButton'

function ContactInfoItem({ icon, url, title, color }) {
  return (
    <li>
      <LinkButton to={url} className="info-item">
        <FontAwesomeIcon icon={icon} color={color} />
        <h3>{title}</h3>
      </LinkButton>
    </li>
  )
}

export default ContactInfoItem
