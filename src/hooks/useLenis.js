import { useEffect } from 'react'
import Lenis from 'lenis'
import { siteConfig } from '@/data/siteConfig'
import { setLenis } from '@/utils/scroll'

// Smooth scrolling. Skipped when disabled in siteConfig or when the visitor prefers reduced motion.
// Touch devices keep their native scrolling (best for mobile performance).
export default function useLenis() {
  useEffect(() => {
    if (!siteConfig.features.smoothScroll) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    setLenis(lenis)

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenis(null)
    }
  }, [])
}
