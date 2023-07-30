import {
  faEnvelope,
  faEye,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import MainNavItem from './MainNavItem'
import './MainNav.scss'

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
      <MainNavItem
        icon={faEye}
        color="#fff"
        to="/portfolio"
        className="portfolio-link"
      />
    </nav>
  )
}

export default MainNav
