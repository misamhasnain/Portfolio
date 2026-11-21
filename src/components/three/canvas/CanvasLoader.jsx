import { Html } from '@react-three/drei'

// Shown inside a canvas while a 3D model loads
export default function CanvasLoader() {
  return (
    <Html center>
      <div
        role="status"
        aria-label="Loading 3D scene"
        className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand-violet"
      />
    </Html>
  )
}
