function PortfolioGalleryItem({ project, className }) {
  console.log(project)
  return (
    <div className={className}>
      <img
        src={project.cover}
        alt={project.title}
        className="portfolio-image"
      />
      <div className="project-content">
        <p className="project-title">{project.title}</p>
        <h4 className="project-description">{project.description}</h4>
        <button
          className="project-button"
          onClick={() => window.open(project.webUrl)}
        >
          Web
        </button>
        <button
          className="project-button"
          onClick={() => window.open(project.repoUrl)}
        >
          Github
        </button>
      </div>
    </div>
  )
}

export default PortfolioGalleryItem
