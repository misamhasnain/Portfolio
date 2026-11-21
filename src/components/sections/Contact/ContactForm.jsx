import { useState } from 'react'
import { Check, Info, Send, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import { profile } from '@/data/profile'
import { siteConfig } from '@/data/siteConfig'
import styles from '@/components/sections/Contact/Contact.module.css'

const endpoint = siteConfig.formspreeEndpoint

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!endpoint) return

    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return // a bot filled the hidden field

    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <GlassCard className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {!endpoint && (
          <div role="note" className="flex gap-3 rounded-xl border border-line bg-brand-blue/10 p-4 text-sm">
            <Info size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />
            <p>
              The contact form is not set up yet. Please email{' '}
              <a href={`mailto:${profile.email}`} className="font-semibold underline">
                {profile.email}
              </a>{' '}
              instead.
            </p>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={styles.field}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={styles.field}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="How can I help?"
            className={styles.field}
          />
        </div>

        <div className={styles.trap} aria-hidden="true">
          <label htmlFor="contact-gotcha">Leave this field empty</label>
          <input id="contact-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <Button type="submit" icon={Send} disabled={!endpoint || status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>

        <div role="status" aria-live="polite">
          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
              <Check size={16} aria-hidden="true" /> Thanks! Your message was sent.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
              <X size={16} aria-hidden="true" /> Something went wrong. Please try again or email me directly.
            </p>
          )}
        </div>
      </form>
    </GlassCard>
  )
}
