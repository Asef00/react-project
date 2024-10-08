import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  title: string
}

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
