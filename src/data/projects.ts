import type { Project, ProjectCategory } from '@/types'

/**
 * DEMO CONTENT — these are illustrative sample projects created to show how the
 * portfolio works. They do not represent real clients. Replace with genuine case
 * studies when available.
 */
export const projects: Project[] = [
  {
    slug: 'demo-learning-platform',
    title: 'Learning Platform',
    category: 'Web App',
    summary: 'A course, quiz and scheduling platform concept for training providers.',
    description:
      'A demonstration SaaS concept showing a course player, quiz engine, curriculum builder and scheduling — the type of multi-role product we design and build.',
    image: '/images/digital_products.png',
    imageAlt: 'Laptop and phone showing a coding workspace with the Shahzam Solution branding',
    tags: ['React', 'TypeScript', 'Laravel', 'MySQL'],
    challenge: 'Training providers need one product that serves admins, instructors and learners without becoming complicated.',
    solution: 'A role-based architecture with a typed React frontend, a Laravel API and background jobs for scheduling and notifications.',
    outcomes: ['Clear separation of admin, instructor and learner experiences', 'Reusable component library', 'API-first design ready for a future mobile app'],
  },
  {
    slug: 'demo-fleet-tracker',
    title: 'Fleet Operations Dashboard',
    category: 'Custom Software',
    summary: 'Vehicle, trip and maintenance tracking dashboard concept.',
    description:
      'A demonstration dashboard for logistics teams covering vehicle records, trip logs, maintenance schedules and reporting.',
    image: '/images/coding_workspace.png',
    imageAlt: 'Laravel code open on a laptop in a dark workspace',
    tags: ['Laravel', 'React', 'PostgreSQL', 'Redis'],
    challenge: 'Operations teams juggle spreadsheets for vehicles, trips and servicing, with no single source of truth.',
    solution: 'A central system with scheduled reminders, searchable records and exportable reports built on a queue-driven Laravel backend.',
    outcomes: ['Single source of truth for fleet data', 'Automated maintenance reminders', 'Exportable operational reports'],
  },
  {
    slug: 'demo-field-companion-app',
    title: 'Field Companion Mobile App',
    category: 'Mobile',
    summary: 'A mobile-first companion app concept for teams working on the move.',
    description:
      'A demonstration mobile experience for field teams: task lists, quick forms, notifications and secure sync with a backend API.',
    image: '/images/contact.png',
    imageAlt: 'Smartphone and laptop on a desk displaying contact options',
    tags: ['React', 'TypeScript', 'REST APIs', 'Laravel'],
    challenge: 'Field staff need fast, reliable tools that work on small screens and unreliable connections.',
    solution: 'A mobile-first interface with optimistic updates and a versioned REST API designed for resilient sync.',
    outcomes: ['Touch-friendly flows', 'Resilient sync design', 'Shared API with the web platform'],
  },
  {
    slug: 'demo-cloud-pipeline',
    title: 'Cloud Delivery Pipeline',
    category: 'Cloud & DevOps',
    summary: 'A CI/CD and infrastructure blueprint for containerised apps on AWS.',
    description:
      'A demonstration delivery pipeline: containerised builds, automated tests, staged deployments and basic observability on AWS.',
    image: '/images/lifecycle.png',
    imageAlt: 'Five-stage development lifecycle diagram',
    tags: ['AWS', 'Docker', 'GitHub Actions', 'Linux'],
    challenge: 'Manual releases are slow, error-prone and hard to reproduce.',
    solution: 'Automated pipelines build, test and ship containers through staging to production with checks at each gate.',
    outcomes: ['Repeatable releases', 'Faster feedback on every change', 'Clear rollback path'],
  },
  {
    slug: 'demo-integration-hub',
    title: 'API Integration Hub',
    category: 'API',
    summary: 'A gateway concept unifying third-party services behind one clean API.',
    description:
      'A demonstration integration layer that normalises payments, messaging and identity providers behind a documented API.',
    image: '/images/services_showcase.png',
    imageAlt: 'Floating service icons for web, mobile, desktop, custom software, cloud and API integration',
    tags: ['REST APIs', 'Python', 'Redis', 'Docker'],
    challenge: 'Each third-party service has its own quirks, making products brittle and hard to change.',
    solution: 'An adapter-based integration layer with queues, retries and consistent error handling.',
    outcomes: ['Swap providers without rewriting product code', 'Resilient retries and logging', 'Documented endpoints'],
  },
  {
    slug: 'demo-agency-site',
    title: 'Marketing Site System',
    category: 'Web App',
    summary: 'A fast, accessible marketing site with a reusable component system.',
    description:
      'A demonstration of a content-rich marketing site with strong performance, accessibility and a design-token driven component library.',
    image: '/images/full_stack_hero.png',
    imageAlt: 'Full stack technology workspace featuring React, Laravel, TypeScript, Python, AWS and DevOps',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    challenge: 'Marketing sites often start fast and slowly become heavy and inconsistent.',
    solution: 'Route-level code splitting, tokens and typed content keep the site quick and consistent.',
    outcomes: ['Performance-minded build', 'Accessible, semantic markup', 'Easy content updates'],
  },
]

export const projectCategories: ('All' | ProjectCategory)[] = ['All', 'Web App', 'Mobile', 'Custom Software', 'API', 'Cloud & DevOps']

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
