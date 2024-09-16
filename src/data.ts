import gearIcon from './assets/icons8-gears-50.png'
import { CoreConceptProps } from './types/props'

export const CORE_CONCEPTS: CoreConceptProps[] = [
  {
    img: gearIcon,
    title: 'Components',
    desc: 'The core UI building block.',
  },
  {
    img: gearIcon,
    title: 'Props',
    desc: 'To have dynamic content per each component instance.',
  },
]

export const inspiringQuotes = [
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

export const TAB_CONTENT = {
  components: {
    title: 'Components',
    desc: 'Components are building blocks of React applications',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>
}
    `,
  },
  jsx: {
    title: 'JSX',
    desc: 'JSX is a syntax extension to JavaScript.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>
}
    `,
  },
  props: {
    title: 'Props',
    desc: 'Components are building blocks of React Project',
    code: `
<div>
  <h1>Welcome {userName}</h1>
</div>
    `,
  },
  state: {
    title: 'State',
    desc: 'State allows React component to change their output over time in response to user actions.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false)

  return <h1>Hello, World!</h1>
}
    `,
  },
}
