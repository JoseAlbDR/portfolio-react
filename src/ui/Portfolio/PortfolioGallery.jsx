import List from '../AppLayout/List'
import PortfolioGalleryItem from './PortfolioGalleryItem'
import portfolioData from '../../data/portfolio.json'
import { useProjects } from '../../hooks/useProjects'
function PortfolioGallery() {
  const { isLoading, data } = useProjects()

  if (isLoading) return
  if (!data) return <p style={{ fontSize: '25px' }}>Error Fetching Projects</p>
  const { projects } = data
  return (
    <div className="images-container">
      {
        <List
          items={projects}
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
