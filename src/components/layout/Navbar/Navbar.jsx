import { useCallback, useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import NavLink from '@/components/layout/Navbar/NavLink'
import MobileMenu from '@/components/layout/Navbar/MobileMenu'
import ThemeToggle from '@/components/layout/Navbar/ThemeToggle'
import useScrollSpy from '@/hooks/useScrollSpy'
import { navLinks } from '@/data/navLinks'
import { profile } from '@/data/profile'
import { siteConfig } from '@/data/siteConfig'
import { scrollToTarget } from '@/utils/scroll'
import { cn } from '@/utils/cn'
import styles from '@/components/layout/Navbar/Navbar.module.css'

// Only show links for sections that are switched on
const links = navLinks.filter((link) => link.id === 'home' || siteConfig.sections[link.id] !== false)
const ids = links.map((link) => link.id)

export default function Navbar() {
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setOpen(false), [])
  const showResume = siteConfig.features.resumeDownload && profile.resume

  return (
    <>
      <header className={cn(styles.root, scrolled && styles.scrolled)}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              setOpen(false)
              scrollToTarget('#home')
            }}
            className="flex items-center gap-2.5"
            aria-label={`${profile.shortName}, back to top`}
          >
            <span className={styles.logo}>{profile.shortName.charAt(0)}</span>
            <span className="hidden font-display font-semibold sm:inline">{profile.shortName}</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink key={link.id} link={link} active={active === link.id} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {showResume && (
              <a
                href={profile.resume}
                download
                className="glass hidden h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition hover:border-brand-violet/60 sm:inline-flex"
              >
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            )}
            {siteConfig.features.darkModeToggle && <ThemeToggle />}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="glass inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header> on purpose: a blurred header would trap this fixed overlay */}
      <MobileMenu open={open} links={links} active={active} onClose={closeMenu} />
    </>
  )
}
