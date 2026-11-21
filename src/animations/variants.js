import { transitions } from '@/animations/transitions'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
}

export const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})
