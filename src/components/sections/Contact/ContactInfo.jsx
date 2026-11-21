import { Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import SocialLinks from '@/components/ui/SocialLinks'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/socialLinks'

const whatsapp = socialLinks.find((link) => link.id === 'whatsapp')

export default function ContactInfo() {
  const items = [
    profile.email && {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    whatsapp?.href && {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: whatsapp.href,
      external: true,
    },
    profile.location && { icon: MapPin, label: 'Location', value: profile.location },
  ].filter(Boolean)

  return (
    <div>
      <h3 className="font-display text-2xl font-bold">Let's talk</h3>
      <p className="mt-3 text-muted">
        Have a question or an opportunity in mind? Send a message or reach out on any of these.
      </p>

      <ul className="mt-8 space-y-5">
        {items.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label} className="flex items-center gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-violet/10 text-brand-violet">
              <Icon size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="break-words font-medium hover:text-brand-violet"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {value}
                </a>
              ) : (
                <p className="font-medium">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <SocialLinks size="sm" className="mt-8" />
    </div>
  )
}
