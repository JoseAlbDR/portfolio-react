import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaItem({ icon, color, href }) {
  return (
    <li>
      <a href={href} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={icon} color={color} />
      </a>
    </li>
  )
}

export default SocialMediaItem
