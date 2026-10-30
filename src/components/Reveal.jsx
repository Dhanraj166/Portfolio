import { useEffect, useRef } from 'react'
import '../styles/Reveal.css'

/**
 * Reveal
 * Wraps any content and animates it into view when it scrolls into the viewport.
 * Uses IntersectionObserver for reliability across browsers.
 * GSAP ScrollTrigger handles more complex animations at the section level.
 *
 * Props:
 *  - delay (ms): stagger neighbouring items by giving each a higher delay
 *  - className: extra classes forwarded to the wrapper div
 */
function Reveal({ children, delay = 0, className = '' }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const el = elementRef.current

    // If reduced-motion is on, show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Honour the delay before making visible
          const timer = setTimeout(() => {
            el.classList.add('reveal-visible')
          }, delay)

          observer.disconnect()

          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export default Reveal
