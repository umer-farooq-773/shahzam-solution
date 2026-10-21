import type { BlogPost } from '@/types'

/**
 * DEMO CONTENT — sample articles written to demonstrate the blog layout.
 * Replace with real articles when available.
 */
export const posts: BlogPost[] = [
  {
    slug: 'structuring-a-large-react-typescript-app',
    title: 'Structuring a Large React + TypeScript App',
    excerpt: 'Feature folders, typed data layers and shared UI primitives keep growing frontends manageable.',
    category: 'React',
    date: '2026-09-02',
    readingMinutes: 6,
    image: '/images/full_stack_hero.png',
    imageAlt: 'React and TypeScript workspace illustration',
    featured: true,
    body: [
      { paragraphs: ['Most frontends do not fail because of a single bad decision. They drift: a utility here, a duplicated component there, until nobody is sure where anything belongs.'] },
      {
        heading: 'Organise by purpose, not by file type',
        paragraphs: ['Group components by what they do: layout, navigation, UI primitives, sections and animations. Pages stay thin and compose those building blocks.'],
        bullets: ['Keep pages readable by moving sections into components', 'Co-locate types with the data they describe', 'Prefer composition over configuration flags'],
      },
      {
        heading: 'Type your data once',
        paragraphs: ['A typed data layer means services, projects and posts have one definition. Components receive typed props and the compiler tells you when something drifts.'],
      },
      { heading: 'Protect performance early', paragraphs: ['Split routes, lazy-load below-the-fold images and keep heavy libraries out of the first bundle. It is far easier than retrofitting later.'] },
    ],
  },
  {
    slug: 'laravel-queues-for-reliable-background-work',
    title: 'Laravel Queues for Reliable Background Work',
    excerpt: 'Move slow tasks off the request cycle and make failures visible and recoverable.',
    category: 'Laravel',
    date: '2026-08-18',
    readingMinutes: 5,
    image: '/images/coding_workspace.png',
    imageAlt: 'Laravel routes file open in a code editor',
    body: [
      { paragraphs: ['Sending email, generating reports and calling third-party APIs all belong in the background. Laravel queues make that straightforward.'] },
      {
        heading: 'Design jobs to be idempotent',
        paragraphs: ['Jobs can be retried. Design them so running twice is safe, and record enough state to know what already happened.'],
        bullets: ['Use unique identifiers for external calls', 'Set sensible retry and backoff rules', 'Route failures to a place someone actually looks'],
      },
      { heading: 'Make queues observable', paragraphs: ['Track queue depth, failure rate and job duration. A silent queue is a risk, not a feature.'] },
    ],
  },
  {
    slug: 'typescript-patterns-that-prevent-bugs',
    title: 'TypeScript Patterns That Prevent Bugs',
    excerpt: 'Discriminated unions, narrow types and exhaustive checks that make illegal states unrepresentable.',
    category: 'TypeScript',
    date: '2026-07-29',
    readingMinutes: 7,
    image: '/images/digital_products.png',
    imageAlt: 'Laptop with code and a checklist including TypeScript',
    body: [
      { paragraphs: ['TypeScript is most valuable when your types describe your domain, not just your syntax.'] },
      {
        heading: 'Model states explicitly',
        paragraphs: ['Instead of several optional booleans, use a discriminated union for states like idle, loading, success and error.'],
        bullets: ['Prefer unions over loosely-typed flags', 'Use exhaustive switch checks', 'Narrow unknown input at the boundary'],
      },
      { heading: 'Validate at the edges', paragraphs: ['Types disappear at runtime. Validate data entering your app — API responses and form input — then trust the types inside.'] },
    ],
  },
  {
    slug: 'python-for-automation-and-data-pipelines',
    title: 'Python for Automation and Data Pipelines',
    excerpt: 'When a small Python service is the right tool next to your main application.',
    category: 'Python',
    date: '2026-07-10',
    readingMinutes: 5,
    image: '/images/services_showcase.png',
    imageAlt: 'Service icons floating above a laptop',
    body: [
      { paragraphs: ['Not everything belongs in your main web framework. Python shines for scripting, data processing and glue code.'] },
      {
        heading: 'Keep scripts boring and testable',
        paragraphs: ['Small functions, clear inputs and outputs, and logging that explains what happened.'],
        bullets: ['Package scripts like real code', 'Log structured events', 'Schedule with proper tooling, not ad-hoc cron'],
      },
    ],
  },
  {
    slug: 'aws-foundations-for-small-teams',
    title: 'AWS Foundations for Small Teams',
    excerpt: 'Environment separation, least-privilege access and cost awareness from day one.',
    category: 'AWS',
    date: '2026-06-21',
    readingMinutes: 8,
    image: '/images/lifecycle.png',
    imageAlt: 'Lifecycle diagram including deploy and monitor stages',
    body: [
      { paragraphs: ['A little structure at the start of your cloud journey saves painful rework later.'] },
      {
        heading: 'Start with the basics',
        paragraphs: ['Separate environments, grant the minimum permissions each role needs, and tag resources so costs are attributable.'],
        bullets: ['Separate staging and production', 'Use least-privilege IAM roles', 'Enable budgets and billing alerts'],
      },
      { heading: 'Automate infrastructure', paragraphs: ['Describe infrastructure as code so environments are reproducible and changes are reviewed like any other change.'] },
    ],
  },
  {
    slug: 'choosing-between-monolith-and-microservices',
    title: 'Monolith or Microservices? A Pragmatic Take',
    excerpt: 'Why a well-structured monolith is often the right first step — and when to split.',
    category: 'Architecture',
    date: '2026-06-02',
    readingMinutes: 6,
    image: '/images/contact.png',
    imageAlt: 'Desk with laptop and phone',
    body: [
      { paragraphs: ['Architecture should follow team size, product maturity and operational capacity — not fashion.'] },
      {
        heading: 'Start modular',
        paragraphs: ['A modular monolith gives clear boundaries without the operational overhead of many deployables.'],
        bullets: ['Define module boundaries early', 'Avoid cross-module database access', 'Split only when there is a clear reason'],
      },
    ],
  },
  {
    slug: 'ci-cd-pipeline-basics-with-github-actions',
    title: 'CI/CD Pipeline Basics with GitHub Actions',
    excerpt: 'A simple build-test-deploy pipeline that gives fast feedback on every change.',
    category: 'DevOps',
    date: '2026-05-14',
    readingMinutes: 5,
    image: '/images/lifecycle.png',
    imageAlt: 'Development lifecycle with deploy and monitor stages',
    body: [
      { paragraphs: ['A reliable pipeline is the backbone of confident delivery.'] },
      {
        heading: 'Keep the pipeline fast',
        paragraphs: ['Cache dependencies, run independent jobs in parallel and fail early.'],
        bullets: ['Run lint and type checks first', 'Cache package installs', 'Deploy only from protected branches'],
      },
    ],
  },
]

export const blogCategories = ['All', 'React', 'Laravel', 'TypeScript', 'Python', 'AWS', 'Architecture', 'DevOps']

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
