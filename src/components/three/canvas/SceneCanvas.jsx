import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '@/components/three/canvas/CanvasLoader'
import useDeviceCapability from '@/hooks/useDeviceCapability'
import { SCENE_CONFIG } from '@/utils/constants'

/**
 * The single <Canvas> wrapper for the whole site.
 * Performance settings live here: capped pixel ratio, no antialiasing on mobile,
 * and `active={false}` stops rendering completely while the scene is off screen.
 */
export default function SceneCanvas({
  children,
  active = true,
  camera,
  className,
  style,
  fallback = <CanvasLoader />,
}) {
  const { isMobile } = useDeviceCapability()

  return (
    <Canvas
      className={className}
      style={style}
      dpr={isMobile ? SCENE_CONFIG.dprMobile : SCENE_CONFIG.dprDesktop}
      frameloop={active ? 'always' : 'never'}
      camera={camera}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </Canvas>
  )
}
