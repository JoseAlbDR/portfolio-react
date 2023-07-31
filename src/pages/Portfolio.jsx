import LoadingAnimation from '../animations/LoadingAnimation'

import PortfolioGallery from '../ui/Portfolio/PortfolioGallery'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import './Portfolio.scss'
import Container from '../ui/AppLayout/Container'
import TextZone from '../ui/AppLayout/TextZone'

function Portfolio() {
  const title = 'Portfolio'

  return (
    <>
      <LoadingAnimation />
      <Container type="portfolio">
        <TextZone>
          <SectionTitle title={title} />
        </TextZone>
        <PortfolioGallery />
      </Container>
    </>
  )
}

export default Portfolio
