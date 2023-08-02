import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BurguerMenu.scss'
import { useSidebar } from '../../context/SidebarContext'

function BurguerMenu() {
  const { showNav, setShowNav, navBar } = useSidebar()

  function handleOpen() {
    setShowNav(true)
    navBar.style.display = 'flex'
  }

  function handleClose() {
    setShowNav(false)
    setTimeout(() => {
      navBar.style.display = 'none'
    }, 400)
  }

  return (
    <>
      {!showNav ? (
        <FontAwesomeIcon
          onClick={handleOpen}
          icon={faBars}
          color="#1c7ed6"
          size="3x"
          className="burger-icon"
        />
      ) : (
        <FontAwesomeIcon
          onClick={handleClose}
          icon={faClose}
          color="#1c7ed6"
          size="3x"
          className="burger-icon"
        />
      )}
    </>
  )
}

export default BurguerMenu
