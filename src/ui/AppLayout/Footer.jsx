import { css, styled } from 'styled-components'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import SocialMedia from '../SideBar/SocialMedia'

const StyledFooter = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 999;
  background: #18181899;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  ${(props) =>
    props.scroll === 'down' &&
    css`
      bottom: -63px;
    `}

  @media (min-width: 768px) {
    .footer {
      display: none;
    }
  }
`

function Footer() {
  const scrollDirection = useScrollDirection()
  return (
    <StyledFooter scroll={`${scrollDirection === 'down' ? 'down' : ''}`}>
      <SocialMedia />
    </StyledFooter>
  )
}

export default Footer
