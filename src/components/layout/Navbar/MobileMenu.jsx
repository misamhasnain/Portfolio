import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavLink from '@/components/layout/Navbar/NavLink'
import SocialLinks from '@/components/ui/SocialLinks'
import { setScrollLocked } from '@/utils/scroll'

export default function MobileMenu({ open, links, active, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    setScrollLocked(true)
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      setScrollLocked(false)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" onClick={onClose} />
          <nav className="relative flex h-full flex-col items-center justify-center gap-1 px-6">
            {links.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.05, duration: 0.35 }}
              >
                <NavLink
                  link={link}
                  variant="mobile"
                  active={active === link.id}
                  onNavigate={onClose}
                />
              </motion.div>
            ))}
            <SocialLinks size="sm" className="mt-8 justify-center" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
