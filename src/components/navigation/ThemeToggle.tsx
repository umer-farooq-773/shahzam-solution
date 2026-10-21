import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme/ThemeProvider'

/** Navbar toggle: shows the icon of the theme you will switch TO (Sun in dark mode, Moon in light mode). */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="group relative grid size-11 shrink-0 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-gold/60 hover:text-accent-2 lg:size-10"
    >
      <span aria-hidden="true" className="relative block size-5">
        <Sun className="theme-icon absolute inset-0 size-5" data-active={isDark} strokeWidth={1.9} />
        <Moon className="theme-icon absolute inset-0 size-5" data-active={!isDark} strokeWidth={1.9} />
      </span>
      {/* Visual tooltip for hover / keyboard focus. The accessible name comes from aria-label, so this is hidden from AT. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-full z-10 mt-2 hidden whitespace-nowrap rounded-md border border-line bg-elevated px-2.5 py-1.5 text-xs font-medium text-ink opacity-0 shadow-soft transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:hover)]:block"
      >
        {label}
      </span>
    </button>
  )
}
