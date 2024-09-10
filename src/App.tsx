import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gearIcon from './assets/icons8-gears-50.png'

const inspiringQuotes = [
  'The only way to do great work is to love what you do.', // Steve Jobs
  'Live as if you were to die tomorrow. Learn as if you were to live forever.', // Mahatma Gandhi

  'The greatest glory in living lies not in never falling, but in rising every time we fall.', // Nelson Mandela
  "Believe you can and you're halfway there.", // Theodore Roosevelt

  'The future belongs to those who believe in the beauty of their dreams.', // Eleanor Roosevelt
  "Success is not the key to happiness. Happiness is the key to success. And if you love what you're doing, you'll be successful.", // Albert Schweitzer
  'The only limit to our realization of tomorrow will be our doubts of today.', // Franklin D. Roosevelt

  'You must be the change you wish to see in the world.', // Mahatma Gandhi
  "Don't watch the clock; be the clock.", // Unknown
  'The greatest glory in living lies not in never falling, but in rising every time we fall.', // Nelson Mandela
]

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  return (
    <nav>
      <ul className="flex gap-4 justify-center">
        <li>Home</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}

type CoreConceptProps = {
  title: string
  desc: string
  img: string
}

function CoreConcept(props: CoreConceptProps) {
  return (
    <li className="flex flex-col items-center gap-2 text-black bg-white rounded-md p-4">
      <img width={50} height={50} src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const quote = inspiringQuotes[genRandomInt(10)]

  return (
    <>
      <Header />
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
        <p className="mt-4">{quote}</p>

        <ul className="mt-6 grid grid-cols-2 gap-4">
          <CoreConcept
            title="Components"
            desc="The core UI building block."
            img={gearIcon}
          />
          <CoreConcept
            title="Props"
            desc="To have dynamic content per each component instance."
            img={gearIcon}
          />
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
