import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoJ from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="jadero" />
      </Link>
      <nav>
        <NavLink exact="true" to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink exact="true" to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink exact="true" to="/contact" className="contact-link">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="contact-link"
            color="#fff"
          />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
