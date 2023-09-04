import {
  faEnvelope,
  faGear,
  faHammer,
  faHome,
  faProjectDiagram,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import MainNavItem from './MainNavItem'
import './MainNav.scss'
import List from '../AppLayout/List'
import { useSidebar } from '../../context/SidebarContext'

function MainNav() {
  const { showNav } = useSidebar()

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
      icon: faSuitcase,
      to: '/portfolio',
      className: 'portfolio-link',
    },
    {
      icon: faGear,
      to: '/skills',
      className: 'skills-link',
    },
  ]

  return (
    <nav
      id="mobile"
      // style={{ display: 'none' }}
      className={showNav ? 'mobile-show' : 'mobile-hide'}
    >
      {
        <List
          items={navItems}
          render={(navItem, i) => (
            <MainNavItem
              key={i}
              icon={navItem.icon}
              to={navItem.to}
              className={navItem.className}
            />
          )}
        />
      }
    </nav>
  )
}

export default MainNav
