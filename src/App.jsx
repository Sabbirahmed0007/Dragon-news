import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div > Count:<span  onClick={()=>setCount(count-1)}>-</span> { count} <span onClick={()=>setCount(count+1)}>+</span> </div>
    </>
  )
}

export default App
