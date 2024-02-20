import './About.scss'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Cubespinner from '../animations/Photo'
import AboutText from '../ui/About/AboutText'
import LoadingAnimation from '../animations/LoadingAnimation'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import Container from '../ui/AppLayout/Container'
import TextZone from '../ui/AppLayout/TextZone'

function About() {
  const faces = [
    { className: 'face1', icon: faReact, color: '#5ED4F4' },
    { className: 'face2', icon: faJsSquare, color: '#EFD81D' },
    { className: 'face3', icon: faHtml5, color: '#F06529' },
    { className: 'face4', icon: faCss3, color: '#28A4D9' },
    { className: 'face5', icon: faGitAlt, color: '#EC4D28' },
    { className: 'face6', icon: faAngular, color: '#DD0031' },
  ]

  const title = 'Sobre mí'
  return (
    <>
      <LoadingAnimation type="pacman" />
      <Container type="about">
        <TextZone>
          <SectionTitle title={title} />
          <AboutText />
        </TextZone>
        <Cubespinner faces={faces} />
      </Container>
    </>
  )
}

export default About
