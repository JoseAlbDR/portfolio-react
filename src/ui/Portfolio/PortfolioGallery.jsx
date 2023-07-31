import List from '../AppLayout/List'
import PortfolioGalleryItem from './PortfolioGalleryItem'
import portfolioData from '../../data/portfolio.json'
function PortfolioGallery() {
  return (
    <div className="images-container">
      {
        <List
          items={portfolioData.portfolio}
          render={(project, i) => (
            <PortfolioGalleryItem
              key={i}
              className="image-box"
              project={project}
            />
          )}
        />
      }
    </div>
  )
}

export default PortfolioGallery
