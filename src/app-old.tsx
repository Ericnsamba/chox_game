import React, { useState } from "react";
import "./styles.css";
// If you are importing the images, use the following lines:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import XImage from "../src/assets/images/x.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import OImage from "../src/assets/images/o.png";

type SquareValue = "X" | "O" | null;

interface SmallBoardProps {
  squares: SquareValue[];
  onClick: (index: number) => void;
  activeSquare: number | null;
}

const SmallBoard: React.FC<SmallBoardProps> = ({
  squares,
  onClick,
  activeSquare,
}) => (
  <div className="small-board">
    {squares.map((value, index) => (
      <div
        key={index}
        className={`small-square ${
          activeSquare === null || activeSquare === index ? "active" : ""
        }`}
        onClick={() =>
          activeSquare === null || activeSquare === index
            ? onClick(index)
            : null
        }
      >
        {value === "X" ? (
          <img src={XImage} alt="X" className="icon" />
        ) : // <img src="../public/images/x.png" alt="X" className="icon" />
        value === "O" ? (
          <img src={OImage} alt="O" className="icon" />
        ) : // <img src="../public/images/o.png" alt="O" className="icon" />
        null}
      </div>
    ))}
  </div>
);

interface BoardProps {
  smallBoards: SquareValue[][];
  onClick: (smallIndex: number, squareIndex: number) => void;
  activeBoard: number | null;
}

const Board: React.FC<BoardProps> = ({ smallBoards, onClick, activeBoard }) => (
  <div className="board">
    {smallBoards.map((squares, index) => (
      <SmallBoard
        key={index}
        squares={squares}
        onClick={(i) => onClick(index, i)}
        activeSquare={activeBoard === index ? null : null} // This needs to be dynamically set if you want to restrict certain squares. For now, it's null to allow any action.
      />
    ))}
  </div>
);

const calculateWinner = (squares: SquareValue[]): SquareValue => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const App = () => {
  const [smallBoards, setSmallBoards] = useState<Array<SquareValue[]>>(
    Array(9).fill(Array(9).fill(null))
  );
  const [activeBoard, setActiveBoard] = useState<number | null>(null);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (smallIndex: number, squareIndex: number) => {
    if (
      (activeBoard !== null && activeBoard !== smallIndex) ||
      calculateWinner(smallBoards[smallIndex]) ||
      smallBoards[smallIndex][squareIndex]
    ) {
      return;
    }

    const newSmallBoards = [...smallBoards];
    const newBoard = [...newSmallBoards[smallIndex]];
    newBoard[squareIndex] = xIsNext ? "X" : "O";

    // Check if this move made by the player wins the small board
    const winner = calculateWinner(newBoard);
    if (winner) {
      // If there's a winner, update the entire board to show the winner's symbol
      for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = winner;
      }
    }

    newSmallBoards[smallIndex] = newBoard;
    setSmallBoards(newSmallBoards);
    setXIsNext(!xIsNext);

    // Determine the next active board; if the designated board is full or has a winner, any board can be played
    setActiveBoard(squareIndex);
    if (
      calculateWinner(smallBoards[squareIndex]) ||
      smallBoards[squareIndex].every((square) => square !== null)
    ) {
      setActiveBoard(null);
    }
  };

  return (
    <div className="app">
      <h1>Chox</h1>
      <Board
        smallBoards={smallBoards}
        onClick={handleClick}
        activeBoard={activeBoard}
      />
      <div className="status">
        {calculateWinner(smallBoards.flat())
          ? `Winner: ${calculateWinner(smallBoards.flat())}`
          : `Next player: ${xIsNext ? "X" : "O"}`}
      </div>
    </div>
  );
};

export default App;
