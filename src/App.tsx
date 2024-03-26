import React, { useState } from "react";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import { calculateWinner } from "./utils/gameLogic";
import "./styles.css";

const App = () => {
  console.log("🚀 ~ app =====>", )
  const [smallBoards, setSmallBoards] = useState(
    Array(9).fill(Array(9).fill(null))
  );
  const [activeBoard, setActiveBoard] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (smallIndex: number, squareIndex: any) => {
    if (
      (activeBoard !== null && activeBoard !== smallIndex) ||
      calculateWinner(smallBoards[smallIndex]) ||
      smallBoards[smallIndex][squareIndex]
    ) {
      return;
    }

    const newSmallBoards = smallBoards.map((board, idx) =>
      idx === smallIndex
        ? board.map((value: any, i: number) =>
            i === squareIndex ? (xIsNext ? "X" : "O") : value
          )
        : board
    );

    setSmallBoards(newSmallBoards);
    setXIsNext(!xIsNext);

    setActiveBoard(squareIndex);

    console.log("🚀 ~ handleClick ~ squareIndex:", squareIndex)
  };

  const startNewGame = () => {
    setSmallBoards(Array(9).fill(Array(9).fill(null)));
    setActiveBoard(null);
    setXIsNext(true);
  };

  const showHowToPlay = () => {
    alert(
      "Ultimate Tic-Tac-Toe Instructions: \n\n" +
        "1. Players take turns playing in the small boards. \n" +
        "2. The first move of the game can be in any small board. \n" +
        "3. The board that the previous move was made in determines which small board the next player must play in. \n" +
        "4. If a move sends a player to a board that has already been won or is full, that player may choose any other board. \n" +
        "5. The game is won by the player who wins three small boards in a row, column, or diagonal. \n\n" +
        "Have fun!"
    );
  };

  const gameStatus = calculateWinner(smallBoards.flat())
    ? `Winner: ${calculateWinner(smallBoards.flat())}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="app">
      <h1>Chox</h1>
      <Board
        smallBoards={smallBoards}
        onClick={handleClick}
        activeBoard={activeBoard}
      />
      <GameInfo
        status={gameStatus}
        onNewGame={startNewGame}
        onShowRules={showHowToPlay}
      />
    </div>
  );
};

export default App;
