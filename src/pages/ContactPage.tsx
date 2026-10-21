import { Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ContactForm from '@/components/ui/ContactForm'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SocialIcon, { socialLabels } from '@/components/ui/SocialIcon'
import { img, siteConfig } from '@/lib/site'
import { useSeo } from '@/lib/useSeo'

export default function ContactPage() {
  useSeo('Contact', 'Tell Shahzam Solution about your project. Send an enquiry about web, mobile, cloud or DevOps work.', img.contact)
  const { contact, social } = siteConfig
  const socials = Object.entries(social).filter(([, v]) => v)
  const soon = 'Details coming soon'

  const rows = [
    { icon: Mail, label: 'Email', value: contact.email, href: contact.email && `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phone && `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: contact.location, href: '' },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        crumbs={[{ label: 'Contact' }]}
        title={<>Let&apos;s Build <span className="text-gold-gradient">Something Great</span></>}
        description="Share a few details about your idea and goals. We will review your message and get back to you with a thoughtful next step."
      />

      <section className="pb-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <ScrollReveal>
            <div className="glass rounded-3xl p-6 sm:p-9">
              <h2 className="mb-6 text-2xl font-extrabold">Send us a message</h2>
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside aria-label="Contact information" className="space-y-5 lg:sticky lg:top-28">
              <figure className="overflow-hidden rounded-3xl border border-line shadow-soft">
                <img src={img.contact} alt="Desk with a phone and laptop showing contact options — email, phone, location and live chat — beside a Shahzam Solution mug and notebook" width={842} height={941} decoding="async" className="aspect-[4/3] w-full object-cover object-[50%_30%]" />
              </figure>
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-extrabold">Contact details</h2>
                <ul className="mt-4 space-y-4">
                  {rows.map((r) => (
                    <li key={r.label} className="flex items-start gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-accent"><r.icon className="size-5" aria-hidden="true" /></span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted">{r.label}</p>
                        {r.value ? (r.href ? <a href={r.href} className="font-medium text-ink hover:text-accent-2">{r.value}</a> : <p className="font-medium text-ink">{r.value}</p>) : <p className="text-muted">{soon}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-tint/5 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">Follow us</p>
                  {socials.length ? (
                    <div className="mt-3 flex gap-2">
                      {socials.map(([k, url]) => (
                        <a key={k} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Shahzam Solution on ${socialLabels[k]}`} className="grid size-10 place-items-center rounded-lg border border-line text-muted hover:border-gold/60 hover:text-accent"><SocialIcon name={k} /></a>
                      ))}
                    </div>
                  ) : <p className="mt-2 text-sm text-muted">Social links coming soon.</p>}
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
