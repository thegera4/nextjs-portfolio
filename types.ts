import { ReactNode } from 'react'

export type Translate = {
    translate: (key: string) => string
}

export type Tooltip = {
    children: ReactNode,
    tooltip?: string
}
  
export type Inputs = Translate & {
    name: string,
    email: string,
    subject: string,
    message: string,
  };