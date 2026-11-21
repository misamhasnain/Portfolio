import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { socialLinks } from '@/data/socialLinks'
import { fadeUp, stagger } from '@/animations'
import { cn } from '@/utils/cn'
import styles from '@/components/ui/SocialLinks.module.css'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  mail: Mail,
}

// Both sizes keep a touch target of at least 44px.
const SIZES = {
  sm: { box: 'h-11 w-11', icon: 18 },
  md: { box: 'h-12 w-12 sm:h-14 sm:w-14', icon: 22 },
}

/**
 * Social icon row. Reads everything from src/data/socialLinks.js.
 * Links with an empty `href` are not rendered.
 */
export default function SocialLinks({ size = 'md', className, links = socialLinks }) {
  const visible = links.filter((link) => link.href)
  if (visible.length === 0) return null

  const { box, icon: iconSize } = SIZES[size] ?? SIZES.md

  return (
    <motion.ul
      aria-label="Social media links"
      className={cn('flex flex-wrap items-center gap-3', className)}
      variants={stagger(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {visible.map((link) => {
        const Icon = ICONS[link.icon]
        if (!Icon) return null

        const label = link.external ? `${link.label} (opens in a new tab)` : `Send an email`

        return (
          <motion.li key={link.id} variants={fadeUp}>
            <motion.a
              href={link.href}
              aria-label={label}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={cn(
                styles.link,
                'inline-flex items-center justify-center rounded-full',
                box,
              )}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            >
              <Icon size={iconSize} className={styles.icon} aria-hidden="true" focusable="false" />
              <span className={styles.tooltip} aria-hidden="true">
                {link.label}
              </span>
            </motion.a>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
