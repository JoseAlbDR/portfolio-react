import AnimatedLetters from '../animations/AnimatedLetters'
import './About.scss'
import { useAnimation } from '../hooks/useAnimation'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Cubespinner from '../animations/Cubespinner'
import AboutText from '../ui/AboutText'
import LoadingAnimation from '../animations/LoadingAnimation'
import SectionTitle from '../ui/SectionTitle'

function About() {
  const { letterClass } = useAnimation(3)

  const faces = [
    { className: 'face1', icon: faReact, color: '#5ED4F4' },
    { className: 'face2', icon: faJsSquare, color: '#EFD81D' },
    { className: 'face3', icon: faHtml5, color: '#F06529' },
    { className: 'face4', icon: faCss3, color: '#28A4D9' },
    { className: 'face5', icon: faGitAlt, color: '#EC4D28' },
    { className: 'face6', icon: faAngular, color: '#DD0031' },
  ]

  const title = 'About me'.split('')
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <SectionTitle title={title} />
          <AboutText />
        </div>
        <div className="stage-cube-content">
          <Cubespinner faces={faces} />
        </div>
      </div>
      <LoadingAnimation type="pacman" />
    </>
  )
}

export default About
