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

/**
 * Integration point for the contact form.
 *
 * - If VITE_CONTACT_ENDPOINT is set, the payload is POSTed there as JSON. Any
 *   non-2xx response (or network error) throws so the UI can show a failure state.
 * - If no endpoint is configured, this runs a MOCK submission: it waits briefly and
 *   returns { mode: 'mock' }. NOTHING is sent anywhere, and the UI says so.
 *
 * To go live, point VITE_CONTACT_ENDPOINT at your API (e.g. a Laravel route that
 * accepts JSON and sends mail) — no other code changes are needed.
 */
export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  if (!siteConfig.contactEndpoint) {
    await new Promise((r) => setTimeout(r, 900))
    return { mode: 'mock' }
  }
  const res = await fetch(siteConfig.contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
  return { mode: 'sent' }
}
