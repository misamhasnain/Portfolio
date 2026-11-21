import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { cn } from '@/utils/cn'

/**
 * Pointer-driven 3D tilt with a moving light glare.
 * Pure CSS 3D (no WebGL), so it is cheap on mobile. Tilt only reacts to a mouse.
 */
export default function TiltCard({ children, className, max = 10, glare = true }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })

  const rotateY = useTransform(springX, [0, 1], [-max, max])
  const rotateX = useTransform(springY, [0, 1], [max, -max])
  const glareX = useTransform(springX, (v) => `${v * 100}%`)
  const glareY = useTransform(springY, (v) => `${v * 100}%`)
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.28), transparent 55%)`

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width)
    y.set((event.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className={cn('group relative', className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  )
}
