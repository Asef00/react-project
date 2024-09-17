import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data'

export default function CoreConcepts() {
  return (
    <section>
      <h2>Core Concepts</h2>
      <ul className="mt-6 grid grid-cols-2 gap-4">
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  )
}
