import { Float } from '@react-three/drei'

const SHAPES = [
  { type: 'icosahedron', position: [-4.6, 1.8, -1], scale: 0.9, color: '#3b82f6', speed: 1.4 },
  { type: 'torus', position: [4.8, 1.4, -2], scale: 0.8, color: '#8b5cf6', speed: 1.1 },
  { type: 'octahedron', position: [-3.8, -2.2, 0], scale: 0.7, color: '#8b5cf6', speed: 1.8 },
  { type: 'sphere', position: [4.2, -2.3, -1], scale: 0.6, color: '#3b82f6', speed: 1.5 },
  { type: 'torus', position: [0.2, 3.2, -3], scale: 0.5, color: '#3b82f6', speed: 1.2 },
]

function Geometry({ type }) {
  switch (type) {
    case 'icosahedron':
      return <icosahedronGeometry args={[1, 0]} />
    case 'octahedron':
      return <octahedronGeometry args={[1, 0]} />
    case 'torus':
      return <torusGeometry args={[1, 0.32, 16, 48]} />
    default:
      return <sphereGeometry args={[1, 24, 24]} />
  }
}

export default function FloatingShapes() {
  return (
    <>
      {SHAPES.map((shape, index) => (
        <Float key={index} speed={shape.speed} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={shape.position} scale={shape.scale}>
            <Geometry type={shape.type} />
            <meshStandardMaterial color={shape.color} roughness={0.25} metalness={0.15} />
          </mesh>
        </Float>
      ))}
    </>
  )
}
