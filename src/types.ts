import type { IconName } from './components/Icon'

export interface SocialLink {
  label: string
  url: string
  icon: IconName
}

export interface Service {
  title: string
  description: string
  icon: IconName
}

export interface Project {
  id: string
  title: string
  category: string
  summary: string
  functionalities?: string[]
  responsibilities?: string[]
  contributions?: string[]
  planned?: string[]
  technologies: string[]
  screenshot?: string
  note?: string
}

export interface SkillGroup {
  title: string
  icon: IconName
  skills: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  context: string
  points: string[]
}

export interface Achievement {
  title: string
  detail: string
  icon: IconName
}

export interface NavigationItem {
  label: string
  href: string
  icon: IconName
}

export interface PortfolioData {
  name: string
  initials: string
  role: string
  tagline: string
  intro: string
  location: string
  availability: string
  email: string
  facebook: string
  github: string
  portrait?: string
  resumeFile: string
  about: string[]
  characteristics: string[]
  socials: SocialLink[]
  services: Service[]
  projects: Project[]
  skillGroups: SkillGroup[]
  experience: ExperienceItem[]
  education: {
    school: string
    degree: string
    period: string
  }
  achievements: Achievement[]
  navigation: NavigationItem[]
}
