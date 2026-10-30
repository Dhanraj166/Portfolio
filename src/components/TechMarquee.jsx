import { skillCategories } from '../data/skills'
import '../styles/TechMarquee.css'

// Technology names for the strip: every category except the core concepts.
const technologies = skillCategories
  .filter((category) => category.id !== 'concepts')
  .flatMap((category) => category.items)

function TechMarquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        <ul className="marquee-group">
          {technologies.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {/* A second copy makes the loop seamless. Screen readers skip it. */}
        <ul className="marquee-group" aria-hidden="true">
          {technologies.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechMarquee