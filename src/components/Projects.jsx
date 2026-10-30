import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import '../styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

function formatNumber(n) {
  return String(n).padStart(2, '0')
}

function Projects() {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // GSAP: animate the section title and controls on scroll
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.fromTo(
        '.projects-controls',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-controls',
            start: 'top 88%',
            once: true,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  function getStep() {
    const track = trackRef.current
    const firstCard = track.firstElementChild
    if (!firstCard) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return firstCard.offsetWidth + gap
  }

  function handleScroll() {
    const index = Math.round(trackRef.current.scrollLeft / getStep())
    setActiveIndex(index)
  }

  function goToProject(index) {
    const safeIndex = Math.max(0, Math.min(projects.length - 1, index))
    trackRef.current.scrollTo({
      left: safeIndex * getStep(),
      behavior: 'smooth',
    })
  }

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Featured <span className="accent-serif">projects</span>
          </h2>
        </Reveal>

        <div className="projects-controls">
          <p className="projects-counter" aria-live="polite">
            {formatNumber(activeIndex + 1)}{' '}
            <span className="projects-counter-total">
              / {formatNumber(projects.length)}
            </span>
          </p>

          <div className="projects-arrows">
            <button
              type="button"
              className="projects-arrow"
              aria-label="Previous project"
              onClick={() => goToProject(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              <FiArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="projects-arrow"
              aria-label="Next project"
              onClick={() => goToProject(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="projects-track"
          ref={trackRef}
          onScroll={handleScroll}
          role="region"
          aria-label="Featured projects"
          tabIndex={0}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
