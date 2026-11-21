import { profile } from '@/data/profile'

// All social URLs live here. Components never hardcode them.
// Leave `href` as '' for any platform you don't want shown: it is skipped automatically.

// WhatsApp number in international format (country code + number, digits only).
const WHATSAPP_NUMBER = '923183338704'

function toWhatsAppUrl(number) {
  const digits = number.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}` : ''
}

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/misamhasnain',
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/misam-hasnain-a15219246/',
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/misamhasnain4/',
    icon: 'instagram',
    external: true,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574132794277',
    icon: 'facebook',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: toWhatsAppUrl(WHATSAPP_NUMBER),
    icon: 'whatsapp',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: profile.email ? `mailto:${profile.email}` : '',
    icon: 'mail',
    external: false,
  },
]
