import { inspiringQuotes } from '../data'

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}
export default function Quote() {
  const quote = inspiringQuotes[genRandomInt(10)]

  return <q className="mt-4 block">{quote}</q>
}
