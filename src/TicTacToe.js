import { useState } from "react";

function Cell({ value, onCellClick }) {
  return (
    <button
      className="Cell"
      onClick={onCellClick}
      style={{
        width: 100,
        height: 100,
        border: "1px solid black",
        backgroundColor: "white",
        fontSize: "60px",
        padding: 0,
        margin: 0,
      }}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill("-"));
  const [player, setPlayer] = useState(1); //1 -> X; 0 -> O

  function handleClick(pos) {
    if (board[pos] !== "-") {
      return;
    }
    const newBoard = board.slice();
    newBoard[pos] = player ? "X" : "O";
    setPlayer(!player);
    setBoard(newBoard);
  }

  function resetBoard() {
    setBoard(Array(9).fill("-"));
    setPlayer(1);
  }

  return (
    <div style={{ padding: "50px" }}>
      <button
        className="reset-board"
        onClick={() => {
          resetBoard();
        }}
        style={{
          backgroundColor: "white",
          padding: 30,
          border: "3px solid black",
        }}
      >
        reset
      </button>
      <div style={{ height: "50px" }}></div>
      <div className="board">
        <div className="board-row">
          <Cell value={board[0]} onCellClick={() => handleClick(0)} />
          <Cell value={board[1]} onCellClick={() => handleClick(1)} />
          <Cell value={board[2]} onCellClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Cell value={board[3]} onCellClick={() => handleClick(3)} />
          <Cell value={board[4]} onCellClick={() => handleClick(4)} />
          <Cell value={board[5]} onCellClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Cell value={board[6]} onCellClick={() => handleClick(6)} />
          <Cell value={board[7]} onCellClick={() => handleClick(7)} />
          <Cell value={board[8]} onCellClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
