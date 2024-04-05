// App.tsx
import React, { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import { calculateWinner, isBoardFull } from "./utils/gameLogic";
import "./styles.css";

type SquareValue = "X" | "O" | null;

const App: React.FC = () => {
  const [showGame, setShowGame] = useState(true);

  const [smallBoards, setSmallBoards] = useState<
    { squares: SquareValue[]; winner: SquareValue }[]
  >(Array(9).fill({ squares: Array(9).fill(null), winner: null }));
  const [activeBoard, setActiveBoard] = useState<number | null>(null);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (smallIndex: number, squareIndex: number) => {
    const board = smallBoards[smallIndex];

    if (
      board.squares[squareIndex] ||
      board.winner ||
      (activeBoard !== null &&
        activeBoard !== smallIndex &&
        !smallBoards[activeBoard].winner)
    ) {
      return;
    }

    const newSquares = board.squares.map((square, idx) =>
      idx === squareIndex ? (xIsNext ? "X" : "O") : square
    );
    const winner = calculateWinner(newSquares);

    const newSmallBoards = smallBoards.map((board, idx) =>
      idx === smallIndex ? { squares: newSquares, winner: winner } : board
    );

    setSmallBoards(newSmallBoards);
    setXIsNext(!xIsNext);

    const nextActiveBoard =
      winner || isBoardFull(newSquares)
        ? getRandomBoard(newSmallBoards)
        : squareIndex;
    setActiveBoard(nextActiveBoard);
  };

  const getRandomBoard = (
    boards: { squares: SquareValue[]; winner: SquareValue }[]
  ): number | null => {
    const availableBoards = boards
      .map((board, index) => ({ ...board, index }))
      .filter((board) => board.winner === null);
    if (availableBoards.length === 0) return null;
    const randomBoard =
      availableBoards[Math.floor(Math.random() * availableBoards.length)];
    return randomBoard.index;
  };

  const startNewGame = () => {
    setSmallBoards(
      Array(9).fill({ squares: Array(9).fill(null), winner: null })
    );
    setActiveBoard(null);
    setXIsNext(true);
  };

  const gameStatus = `Next player: ${xIsNext ? "X" : "O"}`;

  const toggleDisplay = () => {
    setShowGame(!showGame);
  };

  const gameInstructions = () => {
    return (
      <div className="howToPlay">
        <h2>How to Play</h2>
        <p>Welcome to Ultimate Tic-Tac-Toe! Here's how you play:</p>
        <ul className="howToPlayList">
          <li>Players take turns placing Xs and Os on the board.</li>
          <li>
            The board is made up of 9 smaller boards arranged in a 3x3 grid.
          </li>
          <li>
            The winner of a small board is the first to get 3 of their symbols
            in a row.
          </li>
          <li>
            The overall game is won by winning three small boards in a row,
            column, or diagonal.
          </li>
          <li>
            If sent to a board that is already won or full, the player can
            choose freely where to play.
          </li>
        </ul>
        <button className="toggle-button" onClick={toggleDisplay}>
          {showGame ? "Show How to Play" : "Show Game"}
        </button>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Chox</h1>

      {showGame ? (
        <>
          <Board
            smallBoards={smallBoards}
            onClick={handleClick}
            activeBoard={activeBoard}
          />
          <GameInfo
            status={gameStatus}
            onNewGame={startNewGame}
            onShowRules={toggleDisplay}
          />
        </>
      ) : (
        gameInstructions()
      )}
    </div>
  );
};

export default App;
