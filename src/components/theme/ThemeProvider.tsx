import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'shahzam-theme'
const META_COLOR: Record<Theme, string> = { dark: '#07111F', light: '#F8FAFC' }

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const isTheme = (v: unknown): v is Theme => v === 'light' || v === 'dark'

function readStored(): Theme | null {
  try {
    const v = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(v) ? v : null
  } catch {
    return null // storage can be unavailable (private mode, blocked cookies)
  }
}

/** The inline script in index.html has already set data-theme before React mounts; reuse it to avoid a mismatch. */
function initialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme')
  return isTheme(attr) ? attr : (readStored() ?? 'dark')
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[theme])
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme)

  useEffect(() => { applyTheme(theme) }, [theme])

  // Keep multiple open tabs in sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && isTheme(e.newValue)) setThemeState(e.newValue)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try { window.localStorage.setItem(THEME_STORAGE_KEY, next) } catch { /* ignore: preference just won't persist */ }
  }, [])

  const toggleTheme = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme, setTheme])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
