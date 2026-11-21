export const easeOut = [0.22, 1, 0.36, 1]

export const transitions = {
  base: { duration: 0.6, ease: easeOut },
  slow: { duration: 0.9, ease: easeOut },
  spring: { type: 'spring', stiffness: 120, damping: 18 },
}
