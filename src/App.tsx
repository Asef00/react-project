import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CoreConcepts from './components/CoreConcepts'
import Examples from './components/Examples'
import Quote from './components/Quote'
import Counter from './components/Counter'

function App() {
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

        <Counter />

        <Quote />

        <hr className="my-10" />

        <CoreConcepts />

        <Examples />
      </main>
    </>
  )
}

export default App
