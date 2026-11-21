import SceneCanvas from '@/components/three/canvas/SceneCanvas'
import SceneLights from '@/components/three/lights/SceneLights'
import Avatar from '@/components/three/avatar/Avatar'
import useTheme from '@/hooks/useTheme'

export default function AvatarScene({ active = true }) {
  const { theme } = useTheme()

  return (
    <SceneCanvas active={active} camera={{ position: [0, 0, 6.4], fov: 40 }}>
      <SceneLights dark={theme === 'dark'} />
      <Avatar />
    </SceneCanvas>
  )
}
