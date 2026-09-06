import { useState } from 'react'

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
