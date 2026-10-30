import { useEffect, useRef } from 'react'
import '../styles/CustomCursor.css'

/**
 * CustomCursor
 * A soft glow dot + ring that follows the mouse on desktop.
 * Hidden automatically on touch devices via CSS (hover:none media query).
 */
function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only activate on pointer-capable devices
    if (!window.matchMedia('(hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animId

    function onMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    function tick() {
      // Dot snaps instantly
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`

      // Ring lags behind for a smooth trailing effect
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      animId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    animId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
