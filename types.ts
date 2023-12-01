import { ReactNode } from 'react'

export type Translate = { translate: (key: string) => string }

export type Tooltip = { children: ReactNode, tooltip?: string }
  
export type Inputs = Translate & {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export type ExperienceCard = {
    job: {
      title: string
      company: string
      date: string
      summary: string[]
      image: string
    },
}

export type SectionTitle = { title: string }

export type ProjectCardInfo = {
  project: {
    title: string,
    description: string,
    image: string,
    url: string,
    sourceCode: string,
    technologies: [{ icon: string, name: string }],
    mobile: boolean
  }
}