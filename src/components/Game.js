import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import LargeBoardSVG from "../assets/SVG icon/LargeBoardSVG";
import IconO from "../assets/SVG icon/OIcon";
import IconX from "../assets/SVG icon/XIcon";

const Game = (props) => {
  const [boards, setBoards] = useState(new Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [unlockedBoard, setUnlockedBoard] = useState(null);

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
      <Header className="header">
        <Label winner={winner}>
          {winner ? (
            winner === 'X' ? (
              <>
                <IconX color="#0029FF" width={28} height={28}/> winner
              </>
            ) : (
              <>
                <IconO color="#ffffff" width={28} height={28}/> winner
              </>
            )
          ) : currPlayer === 'X' ? (
            <>
              <IconX color="#0028FF" width={28} height={28}/> to play
            </>
          ) : (
            <>
              <IconO color="#ffffff" width={28} height={28}/> to play
            </>
          )}
        </Label>
      </Header>

      <Container>
        <BackgroudSvg>
          <LargeBoardSVG color={"#fff"} />
        </BackgroudSvg>
        <Row>{[0, 1, 2].map(renderBoard)}</Row>
        <Row>{[3, 4, 5].map(renderBoard)}</Row>
        <Row>{[6, 7, 8].map(renderBoard)}</Row>
      </Container>
      {/* <RestartButton onClick={handleRestart}>Restart Game</RestartButton> */}
      <ButtonWrapper className="">
        <RestartButton onClick={handleRestart}>Restart Game</RestartButton>
      </ButtonWrapper>
    </>
  );
};

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
`;

const Label = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  text-transform: capitalize;
  animation: ${(props) => props.winner && winnerAnimation} 1s infinite;
  gap: 16px;
    display: flex;
    align-items: center;
  border-radius: 12px;
  padding: 16px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  max-width: 374px;
  width: 100%;
  `;

const RestartButton = styled.button`
  padding: 16px 40px;
  font-size: 16px;
  background-color: #0029ff;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.8s ease;
  width: 100%;

  &:hover {
    background-color: #001f99;
  }

  &:focus {
    outline: none;
  }
`;


export default Game;