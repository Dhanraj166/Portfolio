import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'
import { skillCategories } from '../data/skills'
import '../styles/Skills.css'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const sectionRef = useRef(null)
  const rowsRef = useRef([])

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Each skill row slides in from the left with a stagger
      rowsRef.current.forEach((row, i) => {
        if (!row) return
        gsap.fromTo(
          row,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 88%',
              once: true,
            },
            delay: i * 0.06,
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Technical <span className="accent-serif">skills</span>
          </h2>
        </Reveal>

        <ul className="skills-list">
          {skillCategories.map((category, index) => (
            <li key={category.id}>
              <div
                className="skills-row"
                ref={(el) => (rowsRef.current[index] = el)}
              >
                <span className="skills-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="skills-category">{category.title}</h3>

                <ul className="skills-tags">
                  {category.items.map((item) => (
                    <li key={item} className="skills-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
