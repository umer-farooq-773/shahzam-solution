import {
  Globe, Smartphone, Boxes, Cloud, Workflow, Webhook, Server, Code2, Database, Gauge,
} from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    short: 'Fast, scalable web apps built for real users.',
    description:
      'From dashboards and portals to SaaS platforms, we design and build web applications that are fast, secure and easy to evolve. We start from your workflows, not from a template.',
    icon: Globe,
    capabilities: ['SaaS platforms & portals', 'Admin dashboards', 'Authentication & roles', 'Real-time features'],
    deliverables: ['Product architecture', 'Responsive UI', 'Tested, documented code', 'Deployment pipeline'],
    stack: ['React', 'TypeScript', 'Laravel', 'PostgreSQL'],
    featured: true,
  },
  {
    slug: 'mobile-application-development',
    title: 'Mobile Application Development',
    short: 'Polished mobile experiences backed by solid APIs.',
    description:
      'We build mobile applications that feel native, connect cleanly to your backend, and are designed around the way people actually use their phones.',
    icon: Smartphone,
    capabilities: ['Cross-platform apps', 'Offline-friendly flows', 'Push notifications', 'Secure API integration'],
    deliverables: ['UX flows & prototypes', 'Production app builds', 'Backend API', 'Store-release guidance'],
    stack: ['React', 'TypeScript', 'REST APIs', 'Laravel'],
    featured: true,
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Software shaped around the way your business works.',
    description:
      'When off-the-shelf tools do not fit, we build bespoke software — internal systems, automation and integrations — that match your processes and grow with you.',
    icon: Boxes,
    capabilities: ['Workflow automation', 'Internal business systems', 'Legacy modernisation', 'Third-party integrations'],
    deliverables: ['Discovery & requirements', 'System design', 'Iterative delivery', 'Handover & documentation'],
    stack: ['Laravel', 'Python', 'MySQL', 'Docker'],
    featured: true,
  },
  {
    slug: 'cloud-infrastructure-aws',
    title: 'Cloud Infrastructure & AWS',
    short: 'Reliable, cost-aware cloud foundations on AWS.',
    description:
      'We design, provision and operate cloud infrastructure that is resilient, observable and sensible about cost — from a single service to a multi-environment platform.',
    icon: Cloud,
    capabilities: ['AWS architecture', 'Infrastructure as code', 'Environment separation', 'Backup & recovery planning'],
    deliverables: ['Architecture diagram', 'Provisioned environments', 'Runbooks', 'Cost & security review'],
    stack: ['AWS', 'Docker', 'Linux', 'GitHub Actions'],
    featured: true,
  },
  {
    slug: 'devops-ci-cd-automation',
    title: 'DevOps & CI/CD Automation',
    short: 'Ship confidently with automated pipelines.',
    description:
      'We automate build, test and release so shipping becomes routine instead of risky — with repeatable environments and clear rollback paths.',
    icon: Workflow,
    capabilities: ['CI/CD pipelines', 'Containerised deployments', 'Automated testing gates', 'Monitoring & alerting'],
    deliverables: ['Pipeline definitions', 'Docker images', 'Release process', 'Observability setup'],
    stack: ['GitHub Actions', 'Docker', 'Linux', 'AWS'],
    featured: true,
  },
  {
    slug: 'api-development-integration',
    title: 'API Development & Integration',
    short: 'Clean, well-documented APIs and dependable integrations.',
    description:
      'We build REST APIs that other teams enjoy using, and integrate payments, messaging, identity and third-party platforms in a maintainable way.',
    icon: Webhook,
    capabilities: ['REST API design', 'Third-party integrations', 'Webhooks & queues', 'API documentation'],
    deliverables: ['API specification', 'Versioned endpoints', 'Integration tests', 'Developer docs'],
    stack: ['REST APIs', 'Laravel', 'Python', 'Redis'],
    featured: true,
  },
  {
    slug: 'backend-development-laravel-python',
    title: 'Backend Development with Laravel & Python',
    short: 'Robust server-side systems and background processing.',
    description:
      'Laravel and Python power the backends we build: structured, testable code, queues and scheduled jobs, and clean data models you can extend for years.',
    icon: Server,
    capabilities: ['Domain-driven structure', 'Queues & scheduled jobs', 'Authentication & permissions', 'Data processing scripts'],
    deliverables: ['Backend codebase', 'Database migrations', 'Automated tests', 'Deployment config'],
    stack: ['Laravel', 'PHP', 'Python', 'MySQL'],
  },
  {
    slug: 'frontend-development-react-typescript',
    title: 'Frontend Development with React & TypeScript',
    short: 'Accessible, type-safe interfaces with great performance.',
    description:
      'We craft frontends with React and TypeScript that are responsive, accessible and maintainable — with component libraries and design tokens that keep teams consistent.',
    icon: Code2,
    capabilities: ['Component libraries', 'Accessible UI', 'Performance budgets', 'Animation & micro-interactions'],
    deliverables: ['Reusable components', 'Typed data layer', 'Responsive layouts', 'Lighthouse-aware builds'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    slug: 'database-design-optimization',
    title: 'Database Design & Optimization',
    short: 'Schemas that scale and queries that stay fast.',
    description:
      'We model your data carefully and tune it as it grows: indexing strategy, query analysis, caching and safe migrations.',
    icon: Database,
    capabilities: ['Schema design', 'Query & index tuning', 'Caching strategy', 'Zero-downtime migrations'],
    deliverables: ['ER diagrams', 'Migration plan', 'Performance report', 'Backup strategy'],
    stack: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'maintenance-performance-optimization',
    title: 'Website Maintenance & Performance Optimization',
    short: 'Keep your product fast, secure and up to date.',
    description:
      'Ongoing care for live products: dependency updates, security patching, monitoring, and measured performance improvements.',
    icon: Gauge,
    capabilities: ['Dependency & security updates', 'Performance audits', 'Uptime monitoring', 'Bug-fix support'],
    deliverables: ['Audit findings', 'Prioritised fixes', 'Monitoring dashboards', 'Monthly summary'],
    stack: ['Linux', 'AWS', 'GitHub Actions', 'Redis'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
