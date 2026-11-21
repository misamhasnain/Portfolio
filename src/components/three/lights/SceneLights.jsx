// Shared light rig. `dark` comes from the page theme (passed in because a Canvas is a separate React tree).
export default function SceneLights({ dark = false, intensity = 1 }) {
  return (
    <>
      <ambientLight intensity={(dark ? 0.6 : 0.95) * intensity} />
      <directionalLight position={[5, 6, 5]} intensity={(dark ? 1.2 : 1.5) * intensity} />
      <pointLight position={[-6, -2, 3]} intensity={80 * intensity} color="#3b82f6" />
      <pointLight position={[6, 3, -2]} intensity={80 * intensity} color="#8b5cf6" />
    </>
  )
}
