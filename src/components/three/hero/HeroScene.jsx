import SceneCanvas from '@/components/three/canvas/SceneCanvas'
import SceneLights from '@/components/three/lights/SceneLights'
import FloatingShapes from '@/components/three/hero/FloatingShapes'
import ParticleField from '@/components/three/hero/ParticleField'
import useTheme from '@/hooks/useTheme'
import { SCENE_CONFIG } from '@/utils/constants'

// Background 3D scene for the hero (desktop and tablet only).
export default function HeroScene({ active = true }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <SceneCanvas active={active} camera={{ position: [0, 0, 9], fov: 45 }} fallback={null}>
      <SceneLights dark={dark} />
      <FloatingShapes />
      <ParticleField count={SCENE_CONFIG.particlesDesktop} dark={dark} />
    </SceneCanvas>
  )
}
