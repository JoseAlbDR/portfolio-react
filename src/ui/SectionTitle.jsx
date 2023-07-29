import AnimatedLetters from '../animations/AnimatedLetters'
import { useAnimation } from '../hooks/useAnimation'

function SectionTitle({ title }) {
  const { letterClass } = useAnimation(4)

  return (
    <h1>
      <AnimatedLetters letterClass={letterClass} strArray={title} idx={15} />
    </h1>
  )
}

export default SectionTitle
