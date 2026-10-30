import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import '../styles/Contact.css'

const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio Inquiry')}`

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact-panel">
          <h2 className="section-title">
            Get in <span className="accent-serif">touch</span>
          </h2>

          <p className="contact-text">
            I am looking for an entry-level Java Full Stack Developer or
            Software Developer role. If you have an opening, or would like to
            talk about my projects, send me an email.
          </p>

          {/* Primary email button */}
          <a className="btn btn-dark" href={mailtoLink}>
            <FiMail size={17} aria-hidden="true" />
            Contact Me
          </a>

          {/* Visible email address */}
          <p className="contact-address">
            <a href={mailtoLink}>{profile.email}</a>
          </p>

          {/* Social links */}
          <ul className="contact-socials">
            <li>
              <a
                className="btn btn-outline-light"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={17} aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="btn btn-outline-light"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={17} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
