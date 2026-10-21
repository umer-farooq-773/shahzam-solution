/**
 * Central, configurable site settings.
 *
 * Contact details are intentionally empty placeholders — nothing has been invented.
 * Fill these in (or load them from env vars) and the Contact page and Footer will
 * automatically show them. Empty values render as "Details coming soon".
 */
export const siteConfig = {
  name: 'Shahzam Solution',
  tagline: 'Smart Solutions for a Digital Tomorrow',
  url: import.meta.env.VITE_SITE_URL ?? '',
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL ?? '',
    phone: import.meta.env.VITE_CONTACT_PHONE ?? '',
    location: import.meta.env.VITE_CONTACT_LOCATION ?? '',
  },
  social: {
    github: import.meta.env.VITE_SOCIAL_GITHUB ?? '',
    x: import.meta.env.VITE_SOCIAL_X ?? '',
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN ?? '',
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK ?? '',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM ?? '',
  },
} as const

export const img = {
  logoStackedLight: '/images/logo-stacked-light.png',
  logoStackedColor: '/images/logo-stacked-color.png',
  logoHorizontal: '/images/logo-horizontal-light.png',
  hero: '/images/full_stack_hero.png',
  lifecycle: '/images/lifecycle.png',
  products: '/images/digital_products.png',
  contact: '/images/contact.png',
  services: '/images/services_showcase.png',
  workspace: '/images/coding_workspace.png',
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/process', label: 'Process' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
] as const
