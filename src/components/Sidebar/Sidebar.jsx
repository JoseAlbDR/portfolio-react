import { Link } from 'react-router-dom'
import './Sidebar.scss'
import LogoJ from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJ} alt="logo" />
        <img src={LogoSubtitle} alt="jadero" />
      </Link>
    </div>
  )
}

export default Sidebar
