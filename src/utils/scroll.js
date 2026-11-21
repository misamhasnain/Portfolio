// One place that knows how to scroll: uses Lenis when it is running, native scrolling otherwise.
let lenisInstance = null

export function setLenis(instance) {
  lenisInstance = instance
}

export function scrollToTarget(target) {
  const isTop = target === 0 || target === '#home'

  if (lenisInstance) {
    lenisInstance.scrollTo(isTop ? 0 : target, {
      offset: isTop ? 0 : -64,
      duration: 1.2,
      force: true,
    })
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior = reduced ? 'auto' : 'smooth'
  if (isTop) {
    window.scrollTo({ top: 0, behavior })
    return
  }
  document.querySelector(target)?.scrollIntoView({ behavior, block: 'start' })
}

// Used by the mobile menu and the project modal
export function setScrollLocked(locked) {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
  if (lenisInstance) {
    if (locked) lenisInstance.stop()
    else lenisInstance.start()
  }
}
