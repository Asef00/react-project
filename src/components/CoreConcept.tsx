import { CoreConceptProps } from '../types/props'

export default function CoreConcept({ img, title, desc }: CoreConceptProps) {
  return (
    <li className="flex flex-col items-center gap-2 text-black bg-white rounded-md p-4">
      <img width={50} height={50} src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  )
}
