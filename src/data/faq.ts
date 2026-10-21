import type { FaqItem } from '@/types'

export const faqCategories = ['All', 'Process', 'Technologies', 'Timelines', 'Maintenance', 'Security', 'Communication', 'Pricing'] as const

export const faqs: FaqItem[] = [
  { id: 'p1', category: 'Process', question: 'How does a project with Shahzam Solution work?', answer: 'We follow a five-stage lifecycle: Plan, Develop, Deploy, Monitor and Improve. We start with discovery to understand your goals, then build in short iterations so you can review progress along the way.' },
  { id: 'p2', category: 'Process', question: 'Will I be involved during development?', answer: 'Yes. We work in iterations with regular demos so you can give feedback early. The level of involvement is something we agree together at the start.' },
  { id: 't1', category: 'Technologies', question: 'Which technologies do you use?', answer: 'Our core stack includes React, TypeScript and Tailwind CSS on the frontend; Laravel, PHP and Python on the backend; MySQL, PostgreSQL and Redis for data; and AWS, Docker and GitHub Actions for cloud and DevOps.' },
  { id: 't2', category: 'Technologies', question: 'Can you work with our existing codebase or tools?', answer: 'Often, yes. We review what you already have and recommend the most sensible path — extend it, refactor it or replace parts of it — rather than rebuilding unnecessarily.' },
  { id: 'tl1', category: 'Timelines', question: 'How long will my project take?', answer: 'It depends on scope, complexity and integrations, so we do not quote timelines without understanding your project. After a discovery conversation we can outline a realistic plan with milestones.' },
  { id: 'm1', category: 'Maintenance', question: 'Do you provide support after launch?', answer: 'We can offer ongoing maintenance, monitoring and improvements after launch. The scope of support is agreed up front so expectations are clear.' },
  { id: 'm2', category: 'Maintenance', question: 'Can you improve the performance of an existing site?', answer: 'Yes. We can audit performance, identify the biggest bottlenecks and make measured improvements to loading speed, queries and infrastructure.' },
  { id: 's1', category: 'Security', question: 'How do you approach security?', answer: 'Security is part of every stage: validated input, proper authentication and permissions, dependency updates, least-privilege infrastructure access and monitoring after release.' },
  { id: 's2', category: 'Security', question: 'Who owns the code and data?', answer: 'Ownership terms are set out in the project agreement. We aim to be transparent and to document everything so you are never locked in.' },
  { id: 'c1', category: 'Communication', question: 'How will we communicate during the project?', answer: 'We agree a communication rhythm at kickoff — typically regular check-ins, demos and a shared place to track progress. You will always know what is happening and what is next.' },
  { id: 'pr1', category: 'Pricing', question: 'How much does a project cost?', answer: 'Cost depends on scope, complexity and timeline, so we provide estimates only after understanding your requirements. Tell us about your project and we will propose an approach and a clear estimate.' },
  { id: 'pr2', category: 'Pricing', question: 'Do you work on fixed-price or ongoing arrangements?', answer: 'Both can make sense depending on the project. Well-defined scopes suit fixed pricing; evolving products often suit an ongoing arrangement. We will recommend what fits.' },
]
