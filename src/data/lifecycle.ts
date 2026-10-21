import type { LifecycleStage } from '@/types'

export const lifecycle: LifecycleStage[] = [
  {
    id: 'plan', index: 1, title: 'Plan', tagline: 'Requirements, discovery & analysis', color: '#7c5cff',
    description:
      'We begin by understanding the problem, the users and the constraints. Good planning removes guesswork and makes later stages faster and cheaper.',
    points: ['Stakeholder & user discovery', 'Requirements and scope definition', 'Technical feasibility analysis', 'Roadmap and milestone planning'],
  },
  {
    id: 'develop', index: 2, title: 'Develop', tagline: 'Architecture, implementation & testing', color: '#21b8ff',
    description:
      'We design the architecture, then build in short iterations with code review and automated tests so you can see real progress early and often.',
    points: ['System and data architecture', 'Iterative implementation', 'Code review and automated tests', 'Regular demos and feedback'],
  },
  {
    id: 'deploy', index: 3, title: 'Deploy', tagline: 'Production release, CI/CD & cloud', color: '#2ecc71',
    description:
      'Releases are automated and repeatable. We provision cloud environments, run pipelines and ship with clear rollback plans.',
    points: ['Staging and production environments', 'Automated CI/CD pipelines', 'Containerised releases', 'Rollback and release checklists'],
  },
  {
    id: 'monitor', index: 4, title: 'Monitor', tagline: 'Performance, observability & security', color: '#ffb000',
    description:
      'After launch we watch how the system behaves — performance, errors, uptime and security signals — so issues are found before users report them.',
    points: ['Logging and error tracking', 'Performance and uptime monitoring', 'Security updates and reviews', 'Alerting and incident response'],
  },
  {
    id: 'improve', index: 5, title: 'Improve', tagline: 'Feedback, optimization & continuous delivery', color: '#19d3c5',
    description:
      'Real usage tells us what to do next. We prioritise feedback, optimise what matters and keep delivering improvements continuously.',
    points: ['User feedback loops', 'Performance optimisation', 'Feature iteration', 'Continuous delivery of improvements'],
  },
]
