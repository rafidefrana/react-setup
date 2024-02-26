// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react';
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addToCount = () => {
    if(count < 10) {
      setCount(count + 1)
    }
    console.log(count)
  }
  
  const subtractFromCount = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }
  


  return (
    <div>
      <h4>The count is curent...</h4>
      <h1>{count}</h1>
      <button onClick={subtractFromCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  )
}

export default App
