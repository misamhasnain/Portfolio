import { useEffect, useRef } from 'react'

// Pointer position from -1 to 1 stored in a ref (no re-renders on every move).
export default function useMousePosition() {
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event) => {
      position.current.x = (event.clientX / window.innerWidth) * 2 - 1
      position.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return position
}
