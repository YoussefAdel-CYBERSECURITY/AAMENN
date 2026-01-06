'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/context/ThemeContext'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    console.log('Three.js initializing...')

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    
    containerRef.current.appendChild(renderer.domElement)
    console.log('Renderer added to DOM')

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 800
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 250
      posArray[i + 1] = (Math.random() - 0.5) * 250
      posArray[i + 2] = (Math.random() - 0.5) * 250
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    )

    // Particle material - changes based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: theme === 'dark' ? 0x60a5fa : 0x3b82f6,
      transparent: true,
      opacity: theme === 'dark' ? 0.6 : 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    console.log('Particles added to scene')

    // Mouse movement
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const clock = new THREE.Clock()
    let animationId: number

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.02
      particlesMesh.rotation.x = elapsedTime * 0.01

      // Mouse interaction
      particlesMesh.rotation.y += mouseX * 0.0003
      particlesMesh.rotation.x += mouseY * 0.0003

      // Render
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()
    console.log('Animation started')

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      console.log('Cleaning up Three.js')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [theme])

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
      />
      {/* Dark overlay - changes based on theme - stays behind navbar and sidebar */}
      <div 
        className={`fixed inset-0 pointer-events-none ${theme === 'dark' ? 'bg-black/30' : 'bg-white/50'}`}
        style={{ zIndex: 1, maxHeight: '100vh' }}
      />
    </>
  )
}
