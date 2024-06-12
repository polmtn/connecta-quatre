import { useState } from 'react'

const CellColor = {
  BLANK: "cellcolor-blank",
  PLAYER1: "cellcolor-player1",
  PLAYER2: "cellcolor-player2"
}

function Cell({ number, color, active, onCellClick }) {
  const cellClass = `cell ${color} ${active ? "active" : ""}`

  return (
    <div className={cellClass} onClick={onCellClick}>
      {number}
    </div>
  )
}

export default function Board() {
  const [cells, setCells] = useState(Array(100).fill(CellColor.BLANK))
  const [activeCell, setActiveCell] = useState(0)

  function setCellColor(color) {
    const nextCells = cells.slice()
    nextCells[activeCell] = color
    setCells(nextCells)
  }

  const boardRows = []
  for (let row = 0; row < 10; row++) {
    const boardCells = []
    for (let col = 0; col < 10; col++) {
      const cellIdx = (row * 10) + col
      boardCells.push(
        <Cell
          key={col}
          number={cellIdx + 1}
          color={cells[cellIdx]}
          active={cellIdx == activeCell}
          onCellClick={() => setActiveCell(cellIdx)}
        />
      )
    }
    boardRows.push(
      <div key={row} className="board-row">
        {boardCells}
      </div>
    )
  }

  return (
    <div className='board'>
      <div className="board-title">
        <input className="board-title-name player1" type="text" maxLength={15} defaultValue="Jugador 1"/>
        <span>⚔️</span>
        <input className="board-title-name player2" type="text" maxLength={15} defaultValue="Jugador 2"/>
      </div>

      <div className="board-rows">
        {boardRows}
      </div>

      <div className="boardbuttons">
        <div className="player-count player1">{cells.filter(c => c == CellColor.PLAYER1).length}</div>
        <button className="cellcolor-player1" onClick={() => setCellColor(CellColor.PLAYER1)}></button>
        <button className="cellcolor-blank" onClick={() => setCellColor(CellColor.BLANK)}>X</button>
        <button className="cellcolor-player2" onClick={() => setCellColor(CellColor.PLAYER2)}></button>
        <div className="player-count player2">{cells.filter(c => c == CellColor.PLAYER2).length}</div>
      </div>
    </div>
  )
}