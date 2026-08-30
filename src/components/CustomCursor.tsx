import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Use MotionValues to prevent React component re-renders on mouse move
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics for the trailing outline
  const springConfig = { stiffness: 400, damping: 30, mass: 0.6 }
  const outlineX = useSpring(cursorX, springConfig)
  const outlineY = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only activate cursor if hover is supported (e.g. desktop) and motion is not reduced
    const hasHover = window.matchMedia('(hover: hover)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!hasHover || prefersReducedMotion) {
      return
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    document.body.classList.add('custom-cursor-active')

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-hover'
      )
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.classList.remove('custom-cursor-active')
      observer.disconnect()
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-hover'
      )
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="cursor-outline"
        style={{
          x: outlineX,
          y: outlineY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          borderColor: isHovering ? 'var(--accent)' : 'var(--muted-soft)',
          backgroundColor: isHovering ? 'rgba(226, 92, 61, 0.08)' : 'rgba(226, 92, 61, 0.01)',
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.8 : 1,
          backgroundColor: isHovering ? 'var(--primary)' : 'var(--accent)',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}

export default CustomCursor