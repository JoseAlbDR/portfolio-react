import AnimatedLetters from '../../animations/AnimatedLetters'
import LogoTitle from '../../assets/images/logo.png'
import LinkButton from '../AppLayout/LinkButton'
import '../../animations/AnimatedLetters.scss'
import { useAnimation } from '../../hooks/useAnimation'
import Resume from '../Skills/Resume'

function Banner() {
  const { letterClass } = useAnimation(4)
  const name = '.Alberto'
  const jobLineOne = 'Junior Full Stack'
  const jobLineTwo = 'Web Developer'

  return (
    <>
      <h1>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Hola'}
            idx={12}
          />
        </span>
        <span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'soy'}
            idx={13}
          />

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={name} idx={14} />
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
      <div className="buttons">
        <LinkButton to="/contact" className="flat-button">
          CONTACTA
        </LinkButton>
        <Resume />
      </div>
    </>
  )
}

export default Banner
