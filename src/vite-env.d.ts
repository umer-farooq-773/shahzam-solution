/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_PHONE?: string
  readonly VITE_CONTACT_LOCATION?: string
  readonly VITE_SOCIAL_GITHUB?: string
  readonly VITE_SOCIAL_X?: string
  readonly VITE_SOCIAL_LINKEDIN?: string
  readonly VITE_SOCIAL_FACEBOOK?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
