import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import SocialMediaItem from './SocialMediaItem'
import { styled } from 'styled-components'

const SocialList = styled.div`
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  text-align: center;
`

function SocialMedia() {
  return (
    <SocialList>
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
    </SocialList>
  )
}

export default SocialMedia
