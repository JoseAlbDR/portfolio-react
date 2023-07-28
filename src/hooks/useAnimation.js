import { useEffect, useState } from 'react'

export const useAnimation = (delay) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, delay * 1000)
  })

  return { letterClass }
}
