import { useEffect, useRef, useState } from 'react'

// Returns [ref, inView]. Used to pause 3D scenes that are off screen.
export default function useInView({ rootMargin = '0px', threshold = 0 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin,
      threshold,
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}
