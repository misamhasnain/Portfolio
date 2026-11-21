import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

// Abstract 3D stand-in (not a human figure). Replaced automatically when public/models/avatar.glb exists.
export default function AvatarPlaceholder() {
  const group = useRef(null)
  const ringA = useRef(null)
  const ringB = useRef(null)

  useFrame((state, delta) => {
    const { x, y } = state.pointer
    if (group.current) {
      group.current.rotation.y += (x * 0.6 - group.current.rotation.y) * 0.05
      group.current.rotation.x += (-y * 0.4 - group.current.rotation.x) * 0.05
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.5
    if (ringB.current) ringB.current.rotation.x += delta * 0.35
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1, 3]} />
          <MeshDistortMaterial color="#6d7cff" distort={0.35} speed={2} roughness={0.15} metalness={0.2} />
        </mesh>

        <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.55, 0.035, 16, 96]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
          <mesh position={[1.55, 0, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
          </mesh>
        </mesh>

        <mesh ref={ringB} rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[1.85, 0.03, 16, 96]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
          <mesh position={[0, 1.85, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
          </mesh>
        </mesh>
      </Float>
    </group>
  )
}
