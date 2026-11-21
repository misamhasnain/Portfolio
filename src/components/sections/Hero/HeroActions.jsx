import { Download, Mail, Rocket } from 'lucide-react'
import Button from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { siteConfig } from '@/data/siteConfig'
import { scrollToTarget } from '@/utils/scroll'

function goTo(target) {
  return (event) => {
    event.preventDefault()
    scrollToTarget(target)
  }
}

export default function HeroActions() {
  const { sections, features } = siteConfig

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sections.projects && (
        <Button as="a" href="#projects" onClick={goTo('#projects')} icon={Rocket}>
          View Projects
        </Button>
      )}
      {sections.contact && (
        <Button as="a" href="#contact" variant="secondary" onClick={goTo('#contact')} icon={Mail}>
          Contact Me
        </Button>
      )}
      {features.resumeDownload && profile.resume && (
        <Button as="a" href={profile.resume} download variant="secondary" icon={Download}>
          Download Resume
        </Button>
      )}
    </div>
  )
}
