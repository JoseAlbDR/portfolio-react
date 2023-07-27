import './Home.scss'
import LogoTitle from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['.', 'A', 'l', 'b', 'e', 'r', 't', 'o']
  // prettier-ignore
  const jobArrayFirst = ["F", "u", "l", "l"," ","S","t","a","c","k"]
  // prettier-ignore
  const jobArrayLast = ["W","e","b"," ","D","e","v","e","l","o","p","e","r"]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
          </span>
          <span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>&apos;m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArrayFirst}
            idx={15}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArrayLast}
            idx={15}
          />
        </h1>
        <h2>Frontent Developer / Backend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
