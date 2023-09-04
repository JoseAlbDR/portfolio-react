import LoadingAnimation from '../animations/LoadingAnimation'
import LinkButton from '../ui/AppLayout/LinkButton'
import TextZone from '../ui/AppLayout/TextZone'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import Container from '../ui/AppLayout/Container'

function NotFound() {
  const title = 'NOT FOUND'
  return (
    <>
      <LoadingAnimation />
      <Container type="about">
        <TextZone>
          <SectionTitle title={title} />
          <LinkButton to="/" className="flat-button">
            BRING ME BACK
          </LinkButton>
        </TextZone>
      </Container>
    </>
  )
}

export default NotFound
