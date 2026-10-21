import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site'
import { services } from '@/data/services'
import SocialIcon from '@/components/ui/SocialIcon'

const soon = 'Details coming soon'

export default function Footer() {
  const { contact, social } = siteConfig
  const col = 'text-sm font-bold uppercase tracking-widest text-ink'
  const link = 'text-sm text-muted transition-colors hover:text-accent-2'

  // Show only Instagram and Facebook
  const socialLinks = [
    { key: 'instagram', url: social.instagram, label: 'Instagram' },
    { key: 'facebook', url: social.facebook, label: 'Facebook' },
  ].filter(s => s.url)

  return (
    <footer className="relative mt-24 border-t border-line bg-bg-2">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1.2fr]">
        <div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Smart solutions for a digital tomorrow. We build web, mobile and cloud software that is fast, secure and built to last.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.length > 0 ? (
              socialLinks.map((s) => (
                <a 
                  key={s.key} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shahzam Solution on ${s.label}`} 
                  className="grid size-11 place-items-center rounded-lg border border-line bg-tint/5 text-muted transition hover:border-gold/60 hover:bg-gold/10 hover:text-accent"
                >
                  <SocialIcon name={s.key} />
                </a>
              ))
            ) : (
              <p className="text-xs text-muted/80">Follow us on social media</p>
            )}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className={col}>Company</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => <li key={l.to}><Link className={link} to={l.to}>{l.label}</Link></li>)}
            <li><Link className={link} to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className={col}>Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => <li key={s.slug}><Link className={link} to={`/services/${s.slug}`}>{s.title}</Link></li>)}
            <li><Link className={`${link} !text-accent-2`} to="/services">All services →</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className={col}>Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{contact.email ? <a className="hover:text-accent-2" href={`mailto:${contact.email}`}>{contact.email}</a> : <span>{soon}</span>}</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{contact.phone ? <a className="hover:text-accent-2" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a> : <span>{soon}</span>}</li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" /><span>{contact.location || soon}</span></li>
          </ul>
          <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-accent-2 hover:text-accent">Start a project →</Link>
        </div>
      </div>
      <div className="border-t border-tint/5">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Shahzam Solution. All rights reserved.</p>
          <p>Build. Deploy. Grow.</p>
        </div>
      </div>
    </footer>
  )
}
