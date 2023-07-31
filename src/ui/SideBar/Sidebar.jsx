import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'
import BurguerMenu from './BurguerMenu'
import { useState } from 'react'
import { ClickAwayListener } from '@mui/material'

function Sidebar() {
  const [showNav, setShowNav] = useState(false)
  console.log(showNav)

  const handleClickAway = () => {
    setShowNav(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="nav-bar">
        <SideLogo />
        <MainNav showNav={showNav} />
        <SocialMedia />
        <BurguerMenu showNav={showNav} onSetShowNav={setShowNav} />
      </div>
    </ClickAwayListener>
  )
}

export default Sidebar
