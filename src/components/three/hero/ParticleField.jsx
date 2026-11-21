import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { seededRandom } from '@/utils/helpers'

export default function ParticleField({ count = 400, dark = false }) {
  const ref = useRef(null)

  const positions = useMemo(() => {
    const random = seededRandom(7)
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      array[i * 3] = (random() - 0.5) * 18
      array[i * 3 + 1] = (random() - 0.5) * 10
      array[i * 3 + 2] = (random() - 0.5) * 8
    }
    return array
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={dark ? '#a78bfa' : '#6d5cf6'}
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}
