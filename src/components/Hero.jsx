import { profile } from '../data/profile'
import profileCutout from '../assets/projects/profile-cutout.png'
import '../styles/Hero.css'

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero Introduction">
      {/* ── Warm Cream, Pale Yellow & Peach Gradient Glow ── */}
      <div className="hero-gradient-bg" aria-hidden="true" />

      {/* ── Oversized Italic Serif Heading Behind Photo ── */}
      <div className="hero-heading-wrapper" aria-hidden="true">
        <h1 className="hero-bg-heading">
          <span className="hero-heading-left">Hey,</span>
          <span className="hero-heading-gap" />
          <span className="hero-heading-right">there</span>
        </h1>
      </div>

      {/* ── Central Profile Photo (Extends to bottom, feathered fade) ── */}
      <div className="hero-photo-container">
        <div className="hero-photo-frame">
          <img
            src={profileCutout}
            alt={`Portrait of ${profile.name}`}
            className="hero-photo-img"
            loading="eager"
            draggable="false"
          />
        </div>
      </div>

      {/* ── Foreground Elements (Badge, Intro, Bottom Name, Bottom Title) ── */}
      <div className="hero-overlay-grid container">
        {/* Left: Pill availability badge */}
        <div className="hero-badge-slot">
          <div className="hero-availability-badge" role="status">
            <span className="hero-badge-indicator" aria-hidden="true">
              <span className="hero-badge-pulse" />
            </span>
            <span className="hero-badge-text">Available for opportunities</span>
          </div>
        </div>

        {/* Right: Short introduction */}
        <div className="hero-intro-slot">
          <p className="hero-intro-text">
            I build web applications using<br className="hero-intro-br" />
            Java, Spring Boot, React, and MySQL.
          </p>
        </div>

        {/* Bottom-left: Bold Condensed Name */}
        <div className="hero-name-slot">
          <div className="hero-name-group" aria-label={`I am ${profile.name}`}>
            <span className="hero-name-lead">I AM</span>
            <span className="hero-name-main">DHANRAJ</span>
          </div>
        </div>

        {/* Bottom-right: Stacked Professional Title */}
        <div className="hero-title-slot">
          <div
            className="hero-title-group"
            aria-label="Java Full Stack Developer"
          >
            <span className="hero-title-line">JAVA FULL STACK</span>
            <span className="hero-title-line">DEVELOPER</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
