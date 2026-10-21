import type { Technology, TechCategory } from '@/types'

export const technologies: Technology[] = [
  { id: 'react', name: 'React', category: 'Frontend', iconKey: 'siReact', description: 'Component-driven interfaces with a rich ecosystem.' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', iconKey: 'siTypescript', description: 'Static typing that catches bugs before users do.' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', iconKey: 'siJavascript', description: 'The language of the web, used where it fits best.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', iconKey: 'siTailwindcss', description: 'Utility-first styling driven by design tokens.' },

  { id: 'laravel', name: 'Laravel', category: 'Backend', iconKey: 'siLaravel', description: 'Expressive PHP framework for robust web backends.' },
  { id: 'php', name: 'PHP', category: 'Backend', iconKey: 'siPhp', description: 'Modern PHP powering mature, proven applications.' },
  { id: 'python', name: 'Python', category: 'Backend', iconKey: 'siPython', description: 'Automation, data processing and service backends.' },
  { id: 'rest', name: 'REST APIs', category: 'Backend', fallbackIcon: 'api', description: 'Clean, versioned and documented HTTP interfaces.' },

  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', fallbackIcon: 'cloud', description: 'Scalable cloud infrastructure and managed services.' },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', iconKey: 'siDocker', description: 'Reproducible containers from laptop to production.' },
  { id: 'cicd', name: 'CI/CD', category: 'Cloud & DevOps', fallbackIcon: 'workflow', description: 'Automated build, test and release pipelines.' },
  { id: 'linux', name: 'Linux', category: 'Cloud & DevOps', iconKey: 'siLinux', description: 'Hardened, well-understood server environments.' },
  { id: 'gha', name: 'GitHub Actions', category: 'Cloud & DevOps', iconKey: 'siGithubactions', description: 'Workflow automation tied to your repositories.' },

  { id: 'mysql', name: 'MySQL', category: 'Databases', iconKey: 'siMysql', description: 'Reliable relational storage for transactional apps.' },
  { id: 'postgres', name: 'PostgreSQL', category: 'Databases', iconKey: 'siPostgresql', description: 'Advanced relational features and strong integrity.' },
  { id: 'redis', name: 'Redis', category: 'Databases', iconKey: 'siRedis', description: 'In-memory caching, queues and fast lookups.' },
]

export const techCategories: TechCategory[] = ['Frontend', 'Backend', 'Cloud & DevOps', 'Databases']

export const homeStack = ['react', 'laravel', 'typescript', 'python', 'aws', 'docker', 'postgres', 'redis', 'gha', 'tailwind']
