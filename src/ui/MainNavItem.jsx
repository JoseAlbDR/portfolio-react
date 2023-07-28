import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function MainNavItem({ icon, color, to, className = '' }) {
  return (
    <NavLink exact="true" to={to} className={className}>
      <FontAwesomeIcon icon={icon} color={color} />
    </NavLink>
  )
}

export default MainNavItem
