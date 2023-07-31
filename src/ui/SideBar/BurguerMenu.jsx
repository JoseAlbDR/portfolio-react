import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BurguerMenu.scss'

function BurguerMenu({ showNav, onSetShowNav }) {
  return (
    <>
      {!showNav ? (
        <FontAwesomeIcon
          onClick={() => onSetShowNav((showNav) => !showNav)}
          icon={faBars}
          color="#1c7ed6"
          size="3x"
          className="burger-icon"
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => onSetShowNav((showNav) => !showNav)}
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
