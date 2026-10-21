import { simpleIcons as s } from '@/lib/icons'

// simple-icons no longer bundles LinkedIn, so its official glyph path is included here.
const LINKEDIN =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const paths: Record<string, string | undefined> = {
  github: s.siGithub?.path,
  x: s.siX?.path,
  facebook: s.siFacebook?.path,
  instagram: s.siInstagram?.path,
  linkedin: LINKEDIN,
}

export const socialLabels: Record<string, string> = { github: 'GitHub', x: 'X', linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram' }

export default function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
