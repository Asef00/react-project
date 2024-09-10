type TabButtonProps = {
  children: string
  onSelect: () => void
}

export default function TabButton({ children, onSelect }: TabButtonProps) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}
