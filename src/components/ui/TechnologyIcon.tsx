import { simpleIcons, type SimpleIcon } from '@/lib/icons'
import { Cloud, Workflow, Network } from 'lucide-react'
import type { Technology } from '@/types'
import { useTheme, type Theme } from '@/components/theme/ThemeProvider'

function lighten(hex: string): string {
  const n = parseInt(hex, 16)
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  if (lum < 0.5) {
    const k = 0.5 - lum + 0.15
    r = Math.min(255, Math.round(r + (255 - r) * k * 1.4))
    g = Math.min(255, Math.round(g + (255 - g) * k * 1.4))
    b = Math.min(255, Math.round(b + (255 - b) * k * 1.4))
  }
  return `rgb(${r}, ${g}, ${b})`
}

/** Light mode: keep brand colours, but deepen very pale marks (e.g. yellow) so they stay legible on white. */
function deepen(hex: string): string {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  const k = lum > 0.55 ? 0.55 / lum : 1
  return `rgb(${Math.round(r * k)}, ${Math.round(g * k)}, ${Math.round(b * k)})`
}

const iconColor = (hex: string, theme: Theme) => (theme === 'light' ? deepen(hex) : lighten(hex))

export function getSimpleIcon(key?: string): SimpleIcon | undefined {
  if (!key) return undefined
  return simpleIcons[key]
}

interface Props {
  tech: Pick<Technology, 'name' | 'iconKey' | 'fallbackIcon'>
  size?: number
  mono?: boolean
}

/** Renders the official simple-icons glyph for a technology, or a neutral Lucide icon where no official mark is bundled. */
export default function TechnologyIcon({ tech, size = 32, mono = false }: Props) {
  const { theme } = useTheme()
  const icon = getSimpleIcon(tech.iconKey)
  if (icon) {
    return (
      <svg role="img" aria-label={tech.name} viewBox="0 0 24 24" width={size} height={size} fill={mono ? 'currentColor' : iconColor(icon.hex, theme)}>
        <path d={icon.path} />
      </svg>
    )
  }
  const Fallback = tech.fallbackIcon === 'cloud' ? Cloud : tech.fallbackIcon === 'workflow' ? Workflow : Network
  return <Fallback aria-label={tech.name} role="img" width={size} height={size} className={mono ? '' : 'text-accent-2'} strokeWidth={1.6} />
}
