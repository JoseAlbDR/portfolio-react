function PortfolioGalleryItem({ project, className }) {
  console.log(project)
  return (
    <div className={className}>
      <img src={project.cover} alt={project.title} className={className} />
    </div>
  )
}

export default PortfolioGalleryItem
