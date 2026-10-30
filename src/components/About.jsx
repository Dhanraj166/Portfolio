import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'
import '../styles/About.css'

gsap.registerPlugin(ScrollTrigger)

// Three real facts about Dhanraj. Edit as projects grow.
const stats = [
  { value: 8,  label: 'Deployed projects' },
  { value: 3,  label: 'Full-stack apps with Spring Boot & PostgreSQL' },
  { value: 1,  label: 'Java Full Stack certification from Payilagam' },
]

function About() {
  const sectionRef = useRef(null)
  const statValueRefs = useRef([])

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Animate each stat counter from 0 → target value when scrolled into view
      statValueRefs.current.forEach((el, i) => {
        if (!el) return
        const target = stats[i].value

        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.6,
            ease: 'power2.out',
            snap: { textContent: 1 }, // keep it a whole number
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            About <span className="accent-serif">me</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          {/* ---------- Story ---------- */}
          <div className="about-text">
            <Reveal>
              <p className="about-lead">
                I am a fresher Java Full Stack Developer who moved into
                software from Mechanical Engineering.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p>
                I graduated in Mechanical Engineering in 2025 from M.A.M
                College of Engineering and Technology, Trichy. I then moved
                into software development through Java Full Stack training at
                Payilagam, Chennai (Feb 2026 – Sep 2026), alongside intensive
                self-learning.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p>
                On the backend I work with Java, Spring Boot, Spring Security
                with JWT, Spring Data JPA and PostgreSQL. On the frontend I
                build with React, Axios and Chart.js. My projects include
                DailyDrop — a milk and water delivery billing app with secure
                login and dashboards — and SpendLens, a personal expense
                tracker with a Spring Boot REST API backend.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <p>
                Problem-solving and debugging are habits I rely on whenever
                something breaks. I am now looking for an entry-level Java
                Full Stack Developer or Software Developer role.
              </p>
            </Reveal>
          </div>

          {/* ---------- Stats ---------- */}
          <ul className="about-stats">
            {stats.map((stat, index) => (
              <li key={stat.label}>
                <Reveal delay={index * 100} className="about-stat">
                  <span
                    className="about-stat-value"
                    ref={(el) => (statValueRefs.current[index] = el)}
                  >
                    {stat.value}
                  </span>
                  <span className="about-stat-label">{stat.label}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
