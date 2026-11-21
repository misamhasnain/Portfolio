import { useEffect, useState } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import AvatarPlaceholder from '@/components/three/avatar/AvatarPlaceholder'
import { siteConfig } from '@/data/siteConfig'

// Dev servers and SPA hosts answer missing files with index.html, so check the content type too.
async function modelExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    const type = response.headers.get('content-type') || ''
    return response.ok && !type.includes('text/html')
  } catch {
    return false
  }
}

function GlbAvatar({ url }) {
  const { scene } = useGLTF(url)
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  )
}

// Uses your own GLB when public/models/avatar.glb exists, otherwise the abstract placeholder.
export default function Avatar() {
  const url = siteConfig.avatarModelPath
  const [found, setFound] = useState(false)

  useEffect(() => {
    if (!url) return undefined
    let cancelled = false
    modelExists(url).then((exists) => {
      if (!cancelled) setFound(exists)
    })
    return () => {
      cancelled = true
    }
  }, [url])

  return found ? <GlbAvatar url={url} /> : <AvatarPlaceholder />
}
