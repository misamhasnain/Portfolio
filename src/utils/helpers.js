export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
export const lerp = (a, b, t) => a + (b - a) * t

// Small deterministic random generator (same result every render)
export function seededRandom(seed = 1) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
