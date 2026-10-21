import { siteConfig } from './site'

export interface ContactPayload {
  name: string
  email: string
  company?: string
  service: string
  budget?: string
  message: string
}

export interface SubmitResult {
  /** "sent" = delivered to a real endpoint. "mock" = nothing was sent (demo mode). */
  mode: 'sent' | 'mock'
}

/** Must match the form name declared in public/__forms.html. */
const NETLIFY_FORM_NAME = 'contact'

/**
 * Integration point for the contact form.
 *
 * 1. VITE_CONTACT_ENDPOINT set -> payload is POSTed there as JSON (custom backend). Non-2xx throws.
 * 2. Otherwise, in a production build (e.g. deployed on Netlify) -> submitted to Netlify Forms:
 *    a url-encoded POST to "/" including `form-name`. The form is registered at deploy time by
 *    public/__forms.html. `honeypot` is the hidden spam-trap field; Netlify discards entries where it is filled.
 * 3. Otherwise (local `npm run dev`) -> MOCK submission. Nothing is sent, and the UI says so,
 *    because Netlify Forms only works on a deployed Netlify site.
 */
export async function submitContact(payload: ContactPayload, honeypot = ''): Promise<SubmitResult> {
  if (siteConfig.contactEndpoint) {
    const res = await fetch(siteConfig.contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
    return { mode: 'sent' }
  }

  if (import.meta.env.PROD) {
    const body = new URLSearchParams({
      'form-name': NETLIFY_FORM_NAME,
      'bot-field': honeypot,
      name: payload.name,
      email: payload.email,
      company: payload.company ?? '',
      service: payload.service,
      budget: payload.budget ?? '',
      message: payload.message,
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(`Netlify form submission failed with status ${res.status}`)
    return { mode: 'sent' }
  }

  await new Promise((r) => setTimeout(r, 900))
  return { mode: 'mock' }
}