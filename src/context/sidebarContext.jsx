import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export default function SidebarProvider({ children }) {
  const [showNav, setShowNav] = useState(false)

  return (
    <SidebarContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined)
    throw new Error('SidebarContext was used outside of the SidebarProvider')
  return context
}
