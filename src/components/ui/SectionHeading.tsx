import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', as: Tag = 'h2', className = '' }: Props) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent ${center ? 'justify-center' : ''}`}>
          <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">{title}</Tag>
      {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
