import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'
import BurguerMenu from './BurguerMenu'
import { ClickAwayListener } from '@mui/material'
import { useSidebar } from '../../context/SidebarContext'
import { useRef } from 'react'
import { useEffect } from 'react'

function Sidebar() {
  const {
    setShowNav,
    // navBar: { current: nav },
  } = useSidebar()

  const navBar = useRef()
  useEffect(() => {
    navBar.current = document.getElementById('mobile')
    console.log(navBar.current)
  }, [])

  const handleClickAway = () => {
    setShowNav(false)

    setTimeout(() => {
      navBar.current.style.display = 'none'
    }, 400)

    console.log(navBar.style)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="nav-bar">
        <SideLogo />
        <MainNav />
        <SocialMedia />
        <BurguerMenu />
      </div>
    </ClickAwayListener>
  )
}

export default Sidebar
