import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoJ from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="jadero" />
      </Link>
      <nav>
        <NavLink exact="true" to="/home">
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
          <a
            href="https://github.com/JoseAlbDR"
            rel="noreferrer"
            target="_blank"
          >
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
    </div>
  )
}

export default Sidebar
