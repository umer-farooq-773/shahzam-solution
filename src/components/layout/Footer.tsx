import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { img, navLinks, siteConfig } from '@/lib/site'
import { services } from '@/data/services'
import SocialIcon, { socialLabels } from '@/components/ui/SocialIcon'

const soon = 'Details coming soon'

export default function Footer() {
  const { contact, social } = siteConfig
  const socials = Object.entries(social).filter(([, url]) => url)
  const col = 'text-sm font-bold uppercase tracking-widest text-ink'
  const link = 'text-sm text-muted transition-colors hover:text-accent-2'

  return (
    <footer className="relative mt-24 border-t border-line bg-bg-2">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Link to="/" aria-label="Shahzam Solution — home">
            <img src={img.logoHorizontal} alt="Shahzam Solution" width={739} height={260} loading="lazy" className="logo-adaptive h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Smart solutions for a digital tomorrow. We build web, mobile and cloud software that is fast, secure and built to last.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.length > 0 ? (
              socials.map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Shahzam Solution on ${socialLabels[k]}`} className="grid size-10 place-items-center rounded-lg border border-line text-muted transition hover:border-gold/60 hover:text-accent">
                  <SocialIcon name={k} />
                </a>
              ))
            ) : (
              <p className="text-xs text-muted/80">Social links will appear here once configured.</p>
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
