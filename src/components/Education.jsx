import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'
import { education } from '../data/education'
import '../styles/Education.css'

gsap.registerPlugin(ScrollTrigger)

function Education() {
  const sectionRef = useRef(null)
  const lineRefs = useRef([])
  const cardRefs = useRef([])

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Animate timeline line drawing in, then card sliding from right
      lineRefs.current.forEach((line, i) => {
        if (!line) return

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            once: true,
          },
        })

        // Line draws from top to bottom
        tl.fromTo(
          line,
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, duration: 0.6, ease: 'power2.out' },
        )

        // Card slides in from right
        if (cardRefs.current[i]) {
          tl.fromTo(
            cardRefs.current[i],
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.3',
          )
        }
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Education <span className="accent-serif">&amp; training</span>
          </h2>
        </Reveal>

        <ul className="education-list">
          {education.map((item, index) => (
            <li key={item.id}>
              <div className="education-item">
                {/* Date column */}
                <Reveal>
                  <p className="education-period">{item.period}</p>
                </Reveal>

                {/* Timeline + card */}
                <div
                  className="education-content"
                  ref={(el) => (lineRefs.current[index] = el)}
                >
                  <div
                    className="education-card"
                    ref={(el) => (cardRefs.current[index] = el)}
                  >
                    <p className="education-type">{item.type}</p>
                    <h3 className="education-title">{item.title}</h3>
                    <p className="education-institution">
                      {item.institution}, {item.location}
                    </p>
                    {item.detail && (
                      <p className="education-detail">{item.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
