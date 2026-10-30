import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data/profile'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Home',      id: 'home' },
  { label: 'About',     id: 'about' },
  { label: 'Skills',    id: 'skills' },
  { label: 'Projects',  id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact',   id: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen]       = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled]       = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  // Detect scroll to toggle frosted glass background
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active link based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner container" aria-label="Main navigation">
        {/* Brand logo (italic serif matching reference) */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Dhanraj<span className="navbar-logo-dot">.</span>
        </a>

        {/* Center navigation links */}
        <ul
          id="nav-menu"
          className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar-link ${
                  activeSection === link.id ? 'navbar-link-active' : ''
                }`}
                aria-current={activeSection === link.id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Action buttons inside mobile drawer */}
          <li className="navbar-mobile-actions">
            <a
              className="btn btn-dark"
              href="#contact"
              onClick={closeMenu}
            >
              Contact Me
            </a>
            <a
              className="btn btn-outline"
              href={profile.resumePath}
              download={profile.resumeFileName}
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Desktop actions on top-right: Contact button (black pill) & Resume */}
        <div className="navbar-actions">
          <a
            className="navbar-resume-link"
            href={profile.resumePath}
            download={profile.resumeFileName}
          >
            Resume
          </a>
          <a
            className="navbar-btn-contact"
            href="#contact"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="navbar-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
