import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'

function Sidebar() {
  return (
    <div className="nav-bar">
      <SideLogo />
      <MainNav />
      <SocialMedia />
    </div>
  )
}

export default Sidebar
