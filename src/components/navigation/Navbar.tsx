import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { img, navLinks } from '@/lib/site'
import { PrimaryButton } from '@/components/ui/Buttons'
import MobileNavigation from './MobileNavigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" aria-label="Shahzam Solution — home" className="shrink-0">
          <img src={img.logoHorizontal} alt="Shahzam Solution" width={739} height={260} className="logo-adaptive h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `relative block rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-accent-2' : 'text-muted hover:text-ink'}`}>
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && <motion.span layoutId="nav-indicator" aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PrimaryButton to="/contact" className="hidden !min-h-10 !px-4 sm:inline-flex">Let&apos;s Talk</PrimaryButton>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-lg border border-line text-ink hover:border-gold/60 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
