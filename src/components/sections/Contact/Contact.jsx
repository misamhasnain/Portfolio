import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactInfo from '@/components/sections/Contact/ContactInfo'
import ContactForm from '@/components/sections/Contact/ContactForm'

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
