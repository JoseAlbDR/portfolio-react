import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BurguerMenu.scss'
import { useSidebar } from '../../context/SidebarContext'
import { useEffect, useRef } from 'react'

function BurguerMenu() {
  const {
    showNav,
    setShowNav,
    // navBar: { current: nav },
  } = useSidebar()

  const navBar = useRef()
  useEffect(() => {
    navBar.current = document.getElementById('mobile')
  }, [])

  function handleOpen() {
    setShowNav(true)
    navBar.current.style.display = 'flex'
    navBar.current.classList.remove('hidden-nav')
    navBar.current.classList.add('show-nav')
  }

  function handleClose() {
    setShowNav(false)
    setTimeout(() => {
      navBar.current.classList.add('hidden-nav')
      navBar.current.classList.remove('show-nav')
    }, 4000)
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
