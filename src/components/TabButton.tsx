type TabButtonProps = {
  children: string
  onSelect: () => void
  isActive: boolean
}

export default function TabButton({
  children,
  onSelect,
  isActive,
}: TabButtonProps) {
  return (
    <li>
      <button className={isActive ? 'bg-slate-800' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}
