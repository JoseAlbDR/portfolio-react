import AnimatedLetters from '../animations/AnimatedLetters'
import LoadingAnimation from '../animations/LoadingAnimation'
import { useAnimation } from '../hooks/useAnimation'
import SectionTitle from '../ui/SectionTitle'
import './Portfolio.scss'

function Portfolio() {
  const { letterClass } = useAnimation(4)
  const title = 'Portfolio'.split('')
  return (
    <>
      <LoadingAnimation />
      <div className="container home-page">
        <div className="text-zone">
          <SectionTitle title={title} />
        </div>
      </div>
    </>
  )
}

export default Portfolio
