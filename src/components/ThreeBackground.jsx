import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

/**
 * RotatingMesh — the main 3D object in the hero.
 * It's a torus-knot that slowly rotates and responds to mouse position.
 */
function RotatingMesh({ mousePos }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2

    // Gentle mouse-driven tilt
    meshRef.current.rotation.x +=
      (mousePos.current.y * 0.3 - meshRef.current.rotation.x) * 0.02
    meshRef.current.rotation.y +=
      (mousePos.current.x * 0.3 - meshRef.current.rotation.y) * 0.02
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.4, 0.42, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe={false}
          roughness={0.1}
          metalness={0.8}
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

/**
 * FloatingOrbs — ambient floating spheres in the background.
 */
function FloatingOrbs() {
  const orbPositions = [
    [-4, 2, -3],
    [4, -2, -5],
    [-2, -3, -2],
    [5, 3, -6],
    [-5, -1, -4],
  ]

  return (
    <>
      {orbPositions.map((pos, i) => (
        <Float key={i} speed={0.8 + i * 0.3} floatIntensity={0.4}>
          <mesh position={pos}>
            <sphereGeometry args={[0.12 + i * 0.04, 8, 8]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

/**
 * ThreeBackground
 * Full-size WebGL canvas for the hero section.
 * Falls back gracefully if WebGL is unavailable.
 */
function ThreeBackground() {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      // Normalise to -1 … +1
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[0, 0, 8]} intensity={0.6} color="#ffffff" />

      {/* Background stars */}
      <Stars
        radius={80}
        depth={60}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Main torus-knot */}
      <RotatingMesh mousePos={mousePos} />
    </Canvas>
  )
}

export default ThreeBackground
