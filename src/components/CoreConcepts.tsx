import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data'
import Section from './Section'

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts">
      <ul className="mt-6 grid grid-cols-2 gap-4">
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  )
}
