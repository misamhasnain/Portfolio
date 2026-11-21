import { BookOpen, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import AboutStats from '@/components/sections/About/AboutStats'
import { profile } from '@/data/profile'
import { education } from '@/data/education'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'
import { cn } from '@/utils/cn'
import styles from '@/components/sections/About/About.module.css'

const university = education.find((item) => item.id === 'bscs')
const training = education.find((item) => item.id === 'smit')
const graduationYear = university?.period.match(/\d{4}/)?.[0]
const technologyCount = new Set(skills.flatMap((group) => group.items)).size

// Everything below comes from the data files. Empty values are skipped.
const facts = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: GraduationCap, label: 'University', value: university?.institution },
  { icon: BookOpen, label: 'Training', value: training?.institution },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
].filter((fact) => fact.value)

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: technologyCount, label: 'Technologies' },
  graduationYear && { value: graduationYear, label: 'Expected graduation' },
].filter(Boolean)

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading eyebrow="About" title="About me" />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

          {profile.lookingFor && (
            <div className={cn(styles.callout, 'mt-6 flex gap-3 rounded-r-xl p-4')}>
              <Sparkles size={20} className="mt-0.5 shrink-0 text-brand-violet" aria-hidden="true" />
              <p className="text-ink">{profile.lookingFor}</p>
            </div>
          )}
        </div>

        <GlassCard className="p-6 lg:col-span-2">
          <ul className="space-y-5">
            {facts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-violet/10 text-brand-violet">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="break-words font-medium hover:text-brand-violet">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <AboutStats stats={stats} />
    </SectionWrapper>
  )
}
