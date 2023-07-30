import {
  faEnvelope,
  faHome,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import MainNavItem from './MainNavItem'
import './MainNav.scss'

function MainNav() {
  const navItems = [
    {
      icon: faHome,
      to: '/home',
      className: '',
    },
    {
      icon: faUser,
      to: '/about',
      className: 'about-link',
    },
    {
      icon: faEnvelope,
      to: '/contact',
      className: 'contact-link',
    },
    {
      icon: faProjectDiagram,
      to: '/portfolio',
      className: 'portfolio-link',
    },
  ]

  return (
    <nav>
      {navItems.map((navItem, i) => (
        <MainNavItem
          key={i}
          icon={navItem.icon}
          to={navItem.to}
          className={navItem.className}
        />
      ))}
    </nav>
  )
}

export default MainNav
