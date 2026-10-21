import { useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Info, Loader2, Send } from 'lucide-react'
import { services } from '@/data/services'
import { submitContact, type ContactPayload } from '@/lib/submitContact'
import { PrimaryButton } from './Buttons'

type Fields = ContactPayload
type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'submitting' | 'success' | 'mock' | 'error'

const empty: Fields = { name: '', email: '', company: '', service: '', budget: '', message: '' }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: Fields): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!emailRe.test(v.email.trim())) e.email = 'Please enter a valid email address, like name@example.com.'
  if (!v.service) e.service = 'Please choose the service you are interested in.'
  if (v.message.trim().length < 20) e.message = 'Please tell us a little more about your project (at least 20 characters).'
  return e
}

const inputCls =
  'w-full rounded-lg border bg-bg/70 px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const statusRef = useRef<HTMLDivElement>(null)

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const blur = (k: keyof Fields) => () => {
    const err = validate(values)[k]
    setErrors((er) => ({ ...er, [k]: err }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`cf-${first}`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      const res = await submitContact(values)
      setStatus(res.mode === 'sent' ? 'success' : 'mock')
      setValues(empty)
    } catch {
      setStatus('error')
    }
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  const field = (k: keyof Fields) => ({
    id: `cf-${k}`,
    name: k,
    value: values[k] ?? '',
    onChange: set(k),
    onBlur: blur(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `cf-${k}-err` : undefined,
    className: `${inputCls} ${errors[k] ? 'border-red-400/70' : 'border-field'}`,
  })
  const Err = ({ k }: { k: keyof Fields }) =>
    errors[k] ? <p id={`cf-${k}-err`} role="alert" className="mt-1.5 text-sm text-red-300">{errors[k]}</p> : null
  const label = 'mb-1.5 block text-sm font-semibold text-ink'
  const busy = status === 'submitting'

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={busy} className="space-y-5">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div key="s" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status" className="flex gap-3 rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-sm text-emerald-100">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p><strong className="block">Message sent.</strong>Thank you — we have received your enquiry and will reply by email.</p>
            </motion.div>
          )}
          {status === 'mock' && (
            <motion.div key="m" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status" className="flex gap-3 rounded-xl border border-sky/40 bg-sky/10 p-4 text-sm text-sky-100">
              <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p><strong className="block">Demo mode — your message was not sent.</strong>The form works, but no contact endpoint is configured yet, so nothing was delivered. See the README to connect a real endpoint.</p>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div key="e" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="flex gap-3 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-100">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p><strong className="block">We could not send your message.</strong>Something went wrong. Your details are still in the form — please try again in a moment.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Name <span className="text-accent" aria-hidden="true">*</span></label>
          <input type="text" autoComplete="name" required placeholder="Your name" {...field('name')} />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email <span className="text-accent" aria-hidden="true">*</span></label>
          <input type="email" autoComplete="email" required placeholder="you@company.com" {...field('email')} />
          <Err k="email" />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Company <span className="font-normal text-muted">(optional)</span></label>
          <input type="text" autoComplete="organization" placeholder="Company name" {...field('company')} />
        </div>
        <div>
          <label htmlFor="cf-service" className={label}>Service <span className="text-accent" aria-hidden="true">*</span></label>
          <select required {...field('service')}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <Err k="service" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-budget" className={label}>Budget <span className="font-normal text-muted">(optional)</span></label>
        <select {...field('budget')}>
          <option value="">Prefer to discuss</option>
          <option value="Exploring options">Still exploring options</option>
          <option value="Small project">Small, focused project</option>
          <option value="Medium project">Medium-sized project</option>
          <option value="Large project">Large or multi-phase project</option>
          <option value="Ongoing support">Ongoing support / retainer</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>Project message <span className="text-accent" aria-hidden="true">*</span></label>
        <textarea rows={5} required placeholder="Tell us about your idea, goals and any deadlines…" {...field('message')} />
        <Err k="message" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Privacy note: the details you enter are used only to respond to your enquiry. Please do not include passwords or sensitive personal data.
        </p>
        <PrimaryButton type="submit" disabled={busy} className="sm:min-w-44">
          {busy ? (<><Loader2 className="size-4 animate-spin" aria-hidden="true" />Sending…</>) : (<>Send message<Send className="size-4" aria-hidden="true" /></>)}
        </PrimaryButton>
      </div>
    </form>
  )
}
