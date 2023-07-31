import './Sidebar.scss'
import SideLogo from './SideLogo'
import MainNav from './MainNav'
import SocialMedia from './SocialMedia'
import BurguerMenu from './BurguerMenu'
import { ClickAwayListener } from '@mui/material'
import { useSidebar } from '../../context/sidebarContext'

function Sidebar() {
  const { setShowNav } = useSidebar()

  const handleClickAway = () => {
    setShowNav(false)
  }

  return (
    <ClickAwayListener onClickAway={() => setShowNav(false)}>
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
