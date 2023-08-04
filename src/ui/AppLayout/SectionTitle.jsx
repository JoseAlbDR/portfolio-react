import { styled } from 'styled-components'
import AnimatedLetters from '../../animations/AnimatedLetters'
import { useAnimation } from '../../hooks/useAnimation'

const H1 = styled.h1``

function SectionTitle({ title }) {
  const { letterClass } = useAnimation(4)

  return (
    <H1>
      <AnimatedLetters letterClass={letterClass} strArray={title} idx={15} />
    </H1>
  )
}

export default SectionTitle
