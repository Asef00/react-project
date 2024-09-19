import { ReactNode } from 'react'

type Props = {
  buttons: ReactNode
  tabContent: ReactNode
  className?: string
  ButtonsContainer?: string
}

export default function Tabs({
  buttons,
  ButtonsContainer = 'menu',
  tabContent,
  className,
}: Props) {
  return (
    <>
      <ButtonsContainer className={className}>{buttons}</ButtonsContainer>
      {tabContent}
    </>
  )
}
