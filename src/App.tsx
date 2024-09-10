import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CORE_CONCEPTS, inspiringQuotes } from './data'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function App() {
  const [count, setCount] = useState(0)

  const quote = inspiringQuotes[genRandomInt(10)]

  const handleSelect = (key: string) => {
    console.log(key)
  }

  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <q className="mt-4 block">{quote}</q>

          <ul className="mt-6 grid grid-cols-2 gap-4">
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
          </ul>
        </div>

        <section className="mt-6">
          <h2>Examples</h2>
          {/* tab buttons */}
          <menu className="mt-4 flex gap-2 justify-center">
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* tab content */}
          <div></div>
        </section>
      </main>
    </>
  )
}

export default App
