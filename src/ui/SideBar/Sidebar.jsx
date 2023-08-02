import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'
import BurguerMenu from './BurguerMenu'
import { ClickAwayListener } from '@mui/material'
import { useSidebar } from '../../context/SidebarContext'

function Sidebar() {
  const { setShowNav, navBar } = useSidebar()

  const handleClickAway = () => {
    setShowNav(false)

    setTimeout(() => {
      navBar.style.display = 'none'
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
