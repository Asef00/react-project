import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
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
        <p className="mt-4">{inspiringQuotes[genRandomInt(10)]}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
