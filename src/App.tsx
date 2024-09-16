import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CORE_CONCEPTS, inspiringQuotes, TAB_CONTENT } from './data'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function App() {
  const [count, setCount] = useState(0)
  const [selectedTab, setSelectedTab] = useState<string>()

  const quote = inspiringQuotes[genRandomInt(10)]

  const handleSelect = (key: string) => {
    setSelectedTab(key)
  }

  let tabContent = <p className="mt-4">Please select a topic.</p>

  if (selectedTab) {
    tabContent = (
      <div className="p-10 mt-4 text-start rounded-md bg-gray-800">
        <h3 className="font-semibold text-white text-xl mb-4">
          {TAB_CONTENT[selectedTab].title}
        </h3>
        <p>{TAB_CONTENT[selectedTab].desc}</p>
        <pre>
          <code>{TAB_CONTENT[selectedTab].code}</code>
        </pre>
      </div>
    )
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
            <TabButton
              isActive={selectedTab === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTab === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTab === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedTab === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App
