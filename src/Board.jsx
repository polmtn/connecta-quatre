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
    <>
      {boardRows}

      <div className="boardbuttons">
        <button className="cellcolor-blank" onClick={() => setCellColor(CellColor.BLANK)}>X</button>
        <button className="cellcolor-player1" onClick={() => setCellColor(CellColor.PLAYER1)}></button>
        <button className="cellcolor-player2" onClick={() => setCellColor(CellColor.PLAYER2)}></button>
      </div>
    </>
  )
}