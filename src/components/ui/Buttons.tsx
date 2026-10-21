import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type CommonProps = {
  children: ReactNode
  to?: string
  href?: string
  arrow?: boolean
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 active:scale-[0.97] focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[0.95rem]'

function render(cls: string, { children, to, href, arrow, className = '', ...rest }: CommonProps) {
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )
  const full = `group ${cls} ${className}`
  if (to) return <Link to={to} className={full}>{content}</Link>
  if (href) return <a href={href} className={full}>{content}</a>
  return <button className={full} {...rest}>{content}</button>
}

export function PrimaryButton(props: CommonProps) {
  return render(
    `${base} bg-gradient-to-b from-gold-hi to-gold text-on-accent shadow-[0_8px_24px_-10px_rgba(255,176,0,0.7)] hover:brightness-110 hover:shadow-[0_10px_28px_-8px_rgba(255,176,0,0.8)]`,
    props,
  )
}

export function SecondaryButton(props: CommonProps) {
  return render(
    `${base} border border-line bg-tint/[0.03] text-ink hover:border-gold/60 hover:bg-gold/10 hover:text-accent-2`,
    props,
  )
}
