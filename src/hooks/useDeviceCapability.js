import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    gl?.getExtension('WEBGL_lose_context')?.loseContext()
    return Boolean(gl)
  } catch {
    return false
  }
}

// Decides how much 3D a device should get.
export default function useDeviceCapability() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [webgl] = useState(detectWebGL)

  const nav = navigator
  const lowEnd =
    (nav.hardwareConcurrency ?? 8) <= 2 ||
    (nav.deviceMemory ?? 8) <= 2 ||
    nav.connection?.saveData === true

  return { isMobile, reducedMotion, lowEnd, canRender3D: webgl && !reducedMotion && !lowEnd }
}
