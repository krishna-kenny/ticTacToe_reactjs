import { useState } from "react";

function Cell() {
  const [value, setValue] = useState("-");

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="Cell"
      onClick={handleClick}
      style={{
        width: 100,
        height: 100,
        border: "3px solid white",
        backgroundColor: "black",
        color: "white",
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

  return (
    <>
      <div className="board">
        <div className="board-row">
          <Cell value={board[0]} />
          <Cell value={board[1]} />
          <Cell value={board[2]} />
        </div>
        <div className="board-row">
          <Cell value={board[3]} />
          <Cell value={board[4]} />
          <Cell value={board[5]} />
        </div>
        <div className="board-row">
          <Cell value={board[6]} />
          <Cell value={board[7]} />
          <Cell value={board[8]} />
        </div>
      </div>
    </>
  );
}
