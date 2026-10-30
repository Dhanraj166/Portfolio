import { useEffect, useRef } from 'react'
import '../styles/ScrollProgress.css'

/**
 * ScrollProgress
 * Thin electric-blue bar fixed at the top that grows as you scroll.
 * Uses GSAP ScrollTrigger for smooth progress tracking.
 */
function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let animationId

    function update() {
      const scrolled = window.scrollY
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? scrolled / total : 0

      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`
      }

      animationId = requestAnimationFrame(update)
    }

    animationId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />
}

export default ScrollProgress
