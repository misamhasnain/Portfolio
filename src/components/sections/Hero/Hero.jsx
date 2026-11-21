import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import HeroProfile from '@/components/sections/Hero/HeroProfile'
import HeroActions from '@/components/sections/Hero/HeroActions'
import SocialLinks from '@/components/ui/SocialLinks'
import TypingText from '@/components/ui/TypingText'
import useDeviceCapability from '@/hooks/useDeviceCapability'
import useInView from '@/hooks/useInView'
import { fadeUp, stagger } from '@/animations'
import { profile } from '@/data/profile'
import { scrollToTarget } from '@/utils/scroll'
import styles from '@/components/sections/Hero/Hero.module.css'

const HeroScene = lazy(() => import('@/components/three/hero/HeroScene'))

export default function Hero() {
  const { canRender3D, isMobile } = useDeviceCapability()
  const [ref, inView] = useInView({ rootMargin: '100px' })

  return (
    <section id="home" ref={ref} className={styles.root}>
      <div className={styles.grid} aria-hidden="true" />

      {/* Background 3D scene: desktop and tablet only, paused when off screen */}
      {canRender3D && !isMobile && (
        <div className={styles.scene} aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene active={inView} />
          </Suspense>
        </div>
      )}

      <motion.div
        className={`${styles.content} mx-auto max-w-4xl text-center`}
        variants={stagger(0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <HeroProfile />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-brand-violet"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 min-h-[2.5rem] font-display text-xl sm:text-2xl">
          <span className="text-muted">I'm a </span>
          <TypingText words={profile.roles} className="font-semibold text-gradient" />
        </motion.p>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
          {profile.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <HeroActions />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8">
          <SocialLinks size="md" className="justify-center" />
        </motion.div>
      </motion.div>

      <a
        href="#about"
        onClick={(event) => {
          event.preventDefault()
          scrollToTarget('#about')
        }}
        aria-label="Scroll down to About"
        className="animate-bounce-soft absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-brand-violet sm:block"
      >
        <ChevronDown size={28} aria-hidden="true" />
      </a>
    </section>
  )
}
