import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  capabilities: string[]
  deliverables: string[]
  stack: string[]
  featured?: boolean
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  challenge: string
  solution: string
  outcomes: string[]
}

export type ProjectCategory = 'Web App' | 'Mobile' | 'Cloud & DevOps' | 'API' | 'Custom Software'

export type TechCategory = 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Databases'

export interface Technology {
  id: string
  name: string
  category: TechCategory
  description: string
  /** simple-icons slug key (e.g. "siReact"). Omit to use a generic Lucide icon. */
  iconKey?: string
  fallbackIcon?: 'cloud' | 'workflow' | 'api'
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingMinutes: number
  image: string
  imageAlt: string
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[]
  featured?: boolean
}

export interface FaqItem {
  id: string
  category: string
  question: string
  answer: string
}

export interface LifecycleStage {
  id: string
  index: number
  title: string
  tagline: string
  description: string
  points: string[]
  color: string
}
