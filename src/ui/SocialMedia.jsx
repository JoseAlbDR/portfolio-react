import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import SocialMediaItem from './SocialMediaItem'

function SocialMedia() {
  return (
    <ul>
      <SocialMediaItem
        icon={faLinkedin}
        color="#fff"
        href="https://www.linkedin.com/in/jalbertodelgado/"
      />
      <SocialMediaItem
        icon={faGithub}
        color="#fff"
        href="https://github.com/JoseAlbDR"
      />
      <SocialMediaItem
        icon={faCode}
        color="#fff"
        href="https://codesandbox.io/u/josealbdr"
      />
      <SocialMediaItem
        icon={faDiscord}
        color="#fff"
        href="https://discordapp.com/users/469452782303313921"
      />
    </ul>
  )
}

export default SocialMedia
