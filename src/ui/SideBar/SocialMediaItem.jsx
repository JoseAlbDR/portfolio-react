import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from 'styled-components'

const SocialListItem = styled.li``

const SocialListLink = styled.a`
  padding: 10px 0;
  display: block;
  font-size: 22px;
  line-height: 16px;

  &:hover svg {
    color: var(--primary-color);
  }
`

function SocialMediaItem({ icon, color, href }) {
  return (
    <SocialListItem>
      <SocialListLink href={href} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={icon} color={color} />
      </SocialListLink>
    </SocialListItem>
  )
}

export default SocialMediaItem
