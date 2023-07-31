import List from '../AppLayout/List'
import PortfolioGalleryItem from './PortfolioGalleryItem'

function PortfolioGallery({ portfolio }) {
  console.log(portfolio)
  return (
    <>
      {
        <List
          items={portfolio}
          render={(project, i) => (
            <PortfolioGalleryItem
              key={i}
              className="image-box"
              project={project}
            />
          )}
        />
      }
    </>
  )
}

export default PortfolioGallery
