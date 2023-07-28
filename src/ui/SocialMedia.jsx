import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMedia() {
  return (
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/jalbertodelgado/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#fff" />
        </a>
      </li>
      <li>
        <a href="https://github.com/JoseAlbDR" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/u/josealbdr"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faCode} color="#fff" />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/app/469452782303313921"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDiscord} color="#fff" />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
