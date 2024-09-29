import { useEffect, useState } from "react";

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
  const emptyCellValue = ".";

  const [board, setBoard] = useState(Array(9).fill(emptyCellValue));
  const [player, setPlayer] = useState(1); //1 -> X; 0 -> O;
  const [turns, setTurns] = useState(0);
  const [game, setGame] = useState("in play");

  useEffect(() => {
    let winner = calculateWinner();
    if (winner !== null) {
      setGame(`winner is: ${!player ? "X" : "O"}`);
      return;
    }

    if (turns === 9) {
      setGame("draw");
    }
  }, [board]);

  function handleClick(pos) {
    if (board[pos] !== emptyCellValue || game !== "in play") {
      return;
    }
    const newBoard = board.slice();
    newBoard[pos] = player ? "X" : "O";
    setTurns(turns + 1);
    setPlayer(!player);
    setBoard(newBoard);
  }

  function resetBoard() {
    setBoard(Array(9).fill(emptyCellValue));
    setPlayer(1);
    setTurns(0);
    setGame("in play");
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] === board[b] &&
        board[b] === board[c] &&
        board[a] !== emptyCellValue
      ) {
        return !player;
      }
    }
    return null;
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

      <div style={{ height: "50px" }}></div>
      <div>{game}</div>
    </div>
  );
}
