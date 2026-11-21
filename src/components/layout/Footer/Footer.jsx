import NavLink from '@/components/layout/Navbar/NavLink'
import SocialLinks from '@/components/ui/SocialLinks'
import { navLinks } from '@/data/navLinks'
import { profile } from '@/data/profile'
import { siteConfig } from '@/data/siteConfig'
import styles from '@/components/layout/Footer/Footer.module.css'

const links = navLinks.filter((link) => link.id === 'home' || siteConfig.sections[link.id] !== false)

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <p className="font-display text-xl font-semibold">{profile.name}</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <NavLink key={link.id} link={link} variant="footer" />
          ))}
        </nav>
        <SocialLinks size="sm" className="justify-center" />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
