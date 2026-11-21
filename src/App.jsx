import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import Skills from '@/components/sections/Skills/Skills'
import Projects from '@/components/sections/Projects/Projects'
import Education from '@/components/sections/Education/Education'
import Experience from '@/components/sections/Experience/Experience'
import Contact from '@/components/sections/Contact/Contact'
import Loader from '@/components/ui/Loader'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import useLenis from '@/hooks/useLenis'
import { siteConfig } from '@/data/siteConfig'

export default function App() {
  const { sections, features } = siteConfig
  const [loading, setLoading] = useState(true)

  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <div className="aurora" aria-hidden="true" />
      {features.scrollProgress && <ScrollProgress />}
      <Navbar />

      <main>
        <Hero />
        {sections.about && <About />}
        {sections.skills && <Skills />}
        {sections.projects && <Projects />}
        {sections.education && <Education />}
        {sections.experience && <Experience />}
        {sections.contact && <Contact />}
      </main>

      <Footer />
      {features.backToTop && <BackToTop />}
    </>
  )
}
