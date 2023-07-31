import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BurguerMenu.scss'
import { useSidebar } from '../../context/SidebarContext'

function BurguerMenu() {
  const { showNav, setShowNav } = useSidebar()
  return (
    <>
      {!showNav ? (
        <FontAwesomeIcon
          onClick={() => setShowNav((showNav) => !showNav)}
          icon={faBars}
          color="#1c7ed6"
          size="3x"
          className="burger-icon"
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => setShowNav((showNav) => !showNav)}
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
