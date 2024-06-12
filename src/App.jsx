import { useState } from 'react'
import Board from './Board.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-row'>
        <Board />
        <Board />
        <Board />
      </div>

      <div className='app-row'>
        <Board />
        <Board />
        <Board />
      </div>
    </>
  )
}

export default App
