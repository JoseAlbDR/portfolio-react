import LoadingAnimation from '../animations/LoadingAnimation'
import portfolioData from '../data/portfolio.json'
import PortfolioGallery from '../ui/Portfolio/PortfolioGallery'
import SectionTitle from '../ui/AppLayout/SectionTitle'
import './Portfolio.scss'

function Portfolio() {
  const title = 'Portfolio'

  return (
    <>
      <LoadingAnimation />
      <div className="container portfolio-page">
        <div className="text-zone">
          <SectionTitle title={title} />
        </div>
        <div className="images-container">
          <PortfolioGallery portfolio={portfolioData.portfolio} />
        </div>
      </div>
    </>
  )
}

export default Portfolio
