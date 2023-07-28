import AnimatedLetters from '../animations/AnimatedLetters'
import LogoTitle from '../assets/images/logo.png'
import LinkButton from './LinkButton'
import '../animations/AnimatedLetters.scss'
import { useAnimation } from '../hooks/useAnimation'

function Banner() {
  const { letterClass } = useAnimation(4)
  const name = '.Alberto'.split('')
  const jobLineOne = 'Full Stack'.split('')
  const jobLineTwo = 'Web Developer'.split('')

  return (
    <div className="text-zone">
      <h1>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['H', 'i,']}
            idx={12}
          />
        </span>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['I']}
            idx={13}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[`'m`]}
            idx={14}
          />
          <img src={LogoTitle} alt="developer" />
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
      </h1>
      <h2>Frontent Developer / Backend Developer</h2>
      <LinkButton to="/contact" className="flat-button">
        CONTACT ME
      </LinkButton>
    </div>
  )
}

export default Banner
