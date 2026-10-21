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
export const NETLIFY_FORM_NAME = 'contact'

/**
 * Submit the contact form to Netlify Forms.
 *
 * In production, submit URL-encoded fields to the static form registered by
 * public/__forms.html. Locally, return a mock result because Netlify Forms only
 * processes submissions on a deployed Netlify site.
 */
export async function submitContact(payload: ContactPayload, honeypot = ''): Promise<SubmitResult> {
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
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'text/html' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(`Netlify form submission failed with status ${res.status}`)
    return { mode: 'sent' }
  }

  await new Promise((r) => setTimeout(r, 900))
  return { mode: 'mock' }
}