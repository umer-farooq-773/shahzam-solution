import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/lib/site'
import { PrimaryButton } from '@/components/ui/Buttons'

interface Props { open: boolean; onClose: () => void }

export default function MobileNavigation({ open, onClose }: Props) {
  const { pathname } = useLocation()

  // Close after navigation.
  useEffect(() => { onClose() }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'calc(100dvh - 4.5rem)' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <motion.li key={l.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `flex min-h-12 items-center rounded-lg px-4 text-lg font-semibold ${isActive ? 'bg-gold/10 text-accent-2' : 'text-ink hover:bg-tint/5'}`}>
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <PrimaryButton to="/contact" className="mt-6 w-full">Let&apos;s Talk</PrimaryButton>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
