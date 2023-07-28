import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import MainNavItem from './MainNavItem'

function MainNav() {
  return (
    <nav>
      <MainNavItem icon={faHome} color="#fff" to="/home" />
      <MainNavItem
        icon={faUser}
        color="#fff"
        to="/about"
        className="about-link"
      />
      <MainNavItem
        icon={faEnvelope}
        color="#fff"
        to="/contact"
        className="contact-link"
      />
    </nav>
  )
}

export default MainNav
