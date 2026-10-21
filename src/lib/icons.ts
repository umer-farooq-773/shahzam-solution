import {
  siReact, siLaravel, siTypescript, siJavascript, siTailwindcss, siPhp, siPython, siDocker,
  siLinux, siGithubactions, siMysql, siPostgresql, siRedis, siGithub, siX, siFacebook, siInstagram,
} from 'simple-icons'

export interface SimpleIcon { path: string; hex: string; title: string }

/**
 * Only the icons the site uses are imported by name so the bundler can tree-shake the
 * rest of the Simple Icons set (a namespace import would pull in thousands of icons).
 */
export const simpleIcons: Record<string, SimpleIcon> = {
  siReact, siLaravel, siTypescript, siJavascript, siTailwindcss, siPhp, siPython, siDocker,
  siLinux, siGithubactions, siMysql, siPostgresql, siRedis, siGithub, siX, siFacebook, siInstagram,
}
