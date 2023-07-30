import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'
import BurguerMenu from './BurguerMenu'
import { useState } from 'react'

function Sidebar() {
  const [showNav, setShowNav] = useState(false)
  console.log(showNav)
  return (
    <div className="nav-bar">
      <SideLogo />
      <MainNav showNav={showNav} />
      <SocialMedia />
      <BurguerMenu showNav={showNav} onSetShowNav={setShowNav} />
    </div>
  )
}

export default Sidebar
