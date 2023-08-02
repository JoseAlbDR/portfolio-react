import { useScrollDirection } from '../../hooks/useScrollDirection'
import SocialMedia from '../SideBar/SocialMedia'
import './Footer.scss'

function Footer() {
  const scrollDirection = useScrollDirection()
  return (
    <div className={`footer ${scrollDirection === 'down' ? 'down' : ''}`}>
      <SocialMedia />
    </div>
  )
}

export default Footer
