import { useEffect } from 'react'
import { useRef } from 'react'

export const useMobileMenuAnimation = () => {
  const navBar = useRef()

  useEffect(() => {
    navBar.current = document.getElementById('mobile')
    console.log(navBar)
  }, [])

  return { navBar }
}
