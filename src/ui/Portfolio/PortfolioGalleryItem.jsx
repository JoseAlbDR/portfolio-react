function PortfolioGalleryItem({ project, className }) {
  return (
    <div className={className}>
      <img
        src={project.image}
        alt={project.title}
        className="portfolio-image"
      />
      <div className="project-content">
        <p className="project-title">{project.title}</p>
        <h4 className="project-description">{project.description}</h4>
        <button
          className="project-button"
          onClick={() => window.open(project.live)}
        >
          Web
        </button>
        <button
          className="project-button"
          onClick={() => window.open(project.github)}
        >
          Github
        </button>
      </div>
    </div>
  )
}

export default PortfolioGalleryItem
