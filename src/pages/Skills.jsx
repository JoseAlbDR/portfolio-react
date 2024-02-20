import LoadingAnimation from '../animations/LoadingAnimation'
import TextZone from '../ui/AppLayout/TextZone'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import AboutText from '../ui/About/AboutText'
import './Skills.scss'
import Container from '../ui/AppLayout/Container'
import TagCanvas from '../ui/Skills/TagCanvas'
import Resume from '../ui/Skills/Resume'
import SkillsText from '../ui/Skills/SkillsText'

function Skills() {
  const title = 'Habilidades'

  return (
    <>
      <LoadingAnimation type="pacman" />
      <Container type="about">
        <TextZone>
          <SectionTitle title={title} />
          <SkillsText />
          <Resume />
        </TextZone>
        <TagCanvas />
      </Container>
    </>
  )
}

export default Skills
