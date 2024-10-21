import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import LargeBoardSVG from "../assets/SVG icon/LargeBoardSVG";
import IconO from "../assets/SVG icon/OIcon";
import IconX from "../assets/SVG icon/XIcon";
import { Toplay } from "./toPlay";
import Button from "./Button";
import HowToPlay from "./HowToPlay"; // Import HowToPlay component

const Game = (props) => {
  const [boards, setBoards] = useState(new Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [unlockedBoard, setUnlockedBoard] = useState(null);
  const [screen, setScreen] = useState("game"); // Add screen state

  const handleClickOnBoard = (b, squares, s) => {
    if (winner) return;

    const newBoards = boards.slice();
    newBoards[b] = checkWinner(squares);

    setCurrPlayer(currPlayer === "X" ? "O" : "X");
    setWinner(checkWinner(newBoards));
    setUnlockedBoard(newBoards[s] ? null : s);
    setBoards(newBoards);
  };

  const checkWinner = (squares) => {
    const winPossibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winPossibilities) {
      if (
        (squares[a] === "X" || squares[a] === "O") &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      )
        return squares[a];
    }
    if (squares.every((s) => s != null)) return "#";
    return null;
  };

  const renderBoard = (b) => (
    <Board
      key={b}
      currPlayer={currPlayer}
      onClick={(squares, s) => handleClickOnBoard(b, squares, s)}
      winner={boards[b]}
      blocked={b !== unlockedBoard && unlockedBoard !== null}
      isCurrentBoard={b === unlockedBoard || unlockedBoard === null} // Determine the current board
    />
  );

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      {screen === "game" ? (
        <div className="game_container flex flex-col p-2 border-white border">
          <div className="flex gap-2 items-start w-full mb-20">
            <Button variant="primary" onClick={handleRestart} className="w-[140px] bg-white">
              END GAME
            </Button>
            <Button variant="secondary" onClick={() => setScreen("howtoplay")}>
              HOW TO PLAY
            </Button>
          </div>
          <Container>
            <BackgroudSvg>
              <LargeBoardSVG color={"#fff"} />
            </BackgroudSvg>
            <Row>{[0, 1, 2].map(renderBoard)}</Row>
            <Row>{[3, 4, 5].map(renderBoard)}</Row>
            <Row>{[6, 7, 8].map(renderBoard)}</Row>
          </Container>
          {/* to play */}
          <Header className="header">
            <Label winner={winner}>
              {winner ? (
                winner === "X" ? (
                  <>
                    <IconX color="#0029FF" width={28} height={28} /> winner
                  </>
                ) : (
                  <>
                    <IconO color="#ffffff" width={28} height={28} /> winner
                  </>
                )
              ) : currPlayer === "X" ? (
                <>
                  <IconX color="#0028FF" width={28} height={28} /> <Toplay />
                </>
              ) : (
                <>
                  <IconO color="#ffffff" width={28} height={28} /> <Toplay />
                </>
              )}
            </Label>
          </Header>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-stretch w-full h-screen p-1">
          <HowToPlay onClose={() => setScreen("game")} />
        </div>
      )}
    </>
  );
};

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0;
`;

const Label = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  text-transform: capitalize;
  animation: ${(props) => props.winner && winnerAnimation} 1s infinite;
  gap: 20px;
  display: flex;
  align-items: center;
  border-radius: 12px;
`;

const winnerAnimation = keyframes`
  0% { transform: scale(1); color: #ffffff; }
  50% { transform: scale(1.5); color: #0029FF; 
    border-color: #0029FF;
    box-shadow: 0 0 20px #0029FF;
  }
  100% { transform: scale(1); color: #ffffff; }
`;

const Container = styled.div``;

const BackgroudSvg = styled.div`
  position: absolute;
  z-index: 0;
`;

const Row = styled.div`
  display: flex;
`;

export default Game;