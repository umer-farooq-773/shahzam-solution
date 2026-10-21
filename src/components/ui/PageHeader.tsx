import type { ReactNode } from 'react'
import Breadcrumbs, { type Crumb } from './Breadcrumbs'
import SectionHeading from './SectionHeading'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Shared top-of-page banner for inner pages. Renders the page's single <h1>. */
export default function PageHeader({ eyebrow, title, description, crumbs, children }: Props) {
  return (
    <header className="relative isolate overflow-hidden pt-[calc(4.5rem+3rem)] pb-14 sm:pt-[calc(4.5rem+4.5rem)] sm:pb-20">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_0%,rgba(255,176,0,0.10),transparent_55%)]" />
      <div className="container-x">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <SectionHeading as="h1" align="left" eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </header>
  )
}
