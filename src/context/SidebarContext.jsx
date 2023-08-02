import { createContext, useContext, useEffect, useRef, useState } from 'react'

const SidebarContext = createContext()

function SidebarProvider({ children }) {
  const [showNav, setShowNav] = useState(null)
  const navBar = useRef()

  useEffect(() => {
    navBar.current = document.getElementById('mobile')
  }, [])

  return (
    <SidebarContext.Provider value={{ showNav, setShowNav, navBar }}>
      {children}
    </SidebarContext.Provider>
  )
}

function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined)
    throw new Error('SidebarContext was used outside of the SidebarProvider')
  return context
}

export { SidebarProvider, useSidebar }
