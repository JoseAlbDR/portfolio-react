import PortfolioGalleryItem from './PortfolioGalleryItem'

function PortfolioGallery({ portfolio }) {
  return (
    <div className="images-container">
      {portfolio.map((project, i) => (
        <PortfolioGalleryItem key={i} className="image-box" project={project} />
      ))}
    </div>
  )
}

export default PortfolioGallery
