import { useState } from 'react'
import Board from './Board.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Connecta 4 Matemàtic</h1>

      <Board />
    </>
  )
}

export default App
