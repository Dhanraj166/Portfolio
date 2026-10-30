import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

/**
 * ProjectCard
 * Displays one project with screenshot, description, tech tags and links.
 * Hover 3D tilt is handled with a JS mouse-move listener on the card.
 */
function ProjectCard({ project }) {
  function handleMouseMove(e) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(max-width: 900px)').matches) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateY = ((x - cx) / cx) * 4   // max ±4°
    const rotateX = -((y - cy) / cy) * 3  // max ±3°

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`
  }

  function handleMouseLeave(e) {
    e.currentTarget.style.transform = ''
  }

  return (
    <article
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Screenshot */}
      <div className="project-media">
        <img
          src={project.image}
          alt={`Screenshot of the ${project.name} project`}
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="project-body">
        <p className="project-type">{project.type}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <ul className="project-tags">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="btn btn-dark"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <FiExternalLink size={15} aria-hidden="true" />
            </a>
          )}
          <a
            className="btn btn-outline"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={15} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
