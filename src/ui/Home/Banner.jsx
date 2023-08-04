import AnimatedLetters from '../../animations/AnimatedLetters'
import LogoTitle from '../../assets/images/logo.png'
import LinkButton from '../AppLayout/LinkButton'
import '../../animations/AnimatedLetters.scss'
import { useAnimation } from '../../hooks/useAnimation'
import { styled } from 'styled-components'

const H1 = styled.h1``

const IMG = styled.img`
  width: 38px;
  margin-left: 15px;
  opacity: 0;
  height: auto;
  animation: rotateIn 1s linear both;
  animation-delay: 1.4s;
`

function Banner() {
  const { letterClass } = useAnimation(4)
  const name = '.Alberto'
  const jobLineOne = 'Full Stack'
  const jobLineTwo = 'Web Developer'

  return (
    <>
      <H1>
        <span>
          <AnimatedLetters letterClass={letterClass} strArray={'Hi'} idx={12} />
        </span>
        <span>
          <AnimatedLetters letterClass={letterClass} strArray={'I'} idx={13} />
          <AnimatedLetters letterClass={letterClass} strArray={`'m`} idx={14} />
          <IMG src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={name} idx={15} />
        </span>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobLineOne}
          idx={15}
        />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobLineTwo}
          idx={15}
        />
      </H1>
      <h2>Frontent Developer / Backend Developer</h2>
      <LinkButton to="/contact" className="flat-button">
        CONTACT ME
      </LinkButton>
    </>
  )
}

export default Banner
