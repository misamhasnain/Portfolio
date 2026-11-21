import { lazy, Suspense } from 'react'
import useDeviceCapability from '@/hooks/useDeviceCapability'
import useInView from '@/hooks/useInView'
import { profile } from '@/data/profile'
import styles from '@/components/sections/Hero/Hero.module.css'

// The 3D code is only downloaded when the device can actually show it.
const AvatarScene = lazy(() => import('@/components/three/avatar/AvatarScene'))

// Your photo in the center, with the 3D avatar floating at its corner.
export default function HeroProfile() {
  const { canRender3D } = useDeviceCapability()
  const [avatarRef, avatarInView] = useInView({ rootMargin: '120px' })

  return (
    <div className="relative mx-auto h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72">
      <div
        className="animate-spin-slow absolute -inset-3 rounded-full border border-dashed border-brand-violet/40"
        aria-hidden="true"
      />

      <div className="glow-ring h-full w-full rounded-full bg-brand-gradient p-[3px]">
        <div className="h-full w-full overflow-hidden rounded-full bg-surface">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="480"
            height="480"
            fetchPriority="high"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div
        ref={avatarRef}
        className="glass glow-ring absolute -bottom-3 -right-5 h-28 w-28 overflow-hidden rounded-full sm:-right-8 sm:h-36 sm:w-36 md:h-40 md:w-40"
        role="img"
        aria-label="Interactive 3D avatar placeholder"
      >
        {canRender3D ? (
          <Suspense fallback={<div className={styles.orb} />}>
            <AvatarScene active={avatarInView} />
          </Suspense>
        ) : (
          <div className={`${styles.orb} animate-float`} />
        )}
      </div>
    </div>
  )
}
