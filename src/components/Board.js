import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import SmallBoardSvg from "../assets/SVG icon/SmallBoard_svg";
import IconX from "../assets/SVG icon/XIcon";
import IconO from "../assets/SVG icon/OIcon";

export default function Board({
  winner,
  blocked,
  currPlayer,
  onClick,
  isCurrentBoard,
}) {
  //TODO: mover state para cima (p/ ajudar a implementar minimax)
  const [squares, setSquares] = useState(new Array(9).fill(null)); // null, 'X', 'O' ou '#'

  return (
    <Container>
      <SvgContainer>
        <SmallBoardSvg color={isCurrentBoard ? "#0029FF" : "#333333"} />{" "}
        {/* Use the SVG with dynamic color */}
      </SvgContainer>
      <Row>{[0, 1, 2].map((s) => renderSquare(s))}</Row>
      <Row>{[3, 4, 5].map((s) => renderSquare(s))}</Row>
      <Row>{[6, 7, 8].map((s) => renderSquare(s))}</Row>
      {/* {blocked || winner? <OverlayedContainer winner={winner}>{winner}</OverlayedContainer> : null} */}

      {/* {(blocked || winner) && (
         <OverlayedContainer winner={winner}>
          {winner === 'X' ? <IconX color="#0029FF" width={109} height={109}/> : <IconO color="#ffffff"  width={109} height={109}/>}
        </OverlayedContainer>  )} */}

      {/* {(blocked || winner) && (
        <OverlayedContainer winner={winner}>
          {winner === "X" ? (
            <IconX color="#0029FF" width={109} height={109} />
          ) : (
            <IconO color="#ffffff" width={109} height={109} />
          )}
        </OverlayedContainer>
      )} */}

      {(blocked || winner) && (
        <OverlayedContainer winner={winner}>
          {winner &&
            (winner === "X" ? (
              <IconX color="#0029FF" width={110} height={110} />
            ) : (
              <IconO color="#ffffff" width={110} height={110} />
            ))}
        </OverlayedContainer>
      )}
    </Container>
  );

  function renderSquare(s) {
    return (
      <Square
        key={s}
        value={squares[s]}
        disabled={squares[s] || winner}
        onClick={() => {
          handleClickOnSquare(s); // quando Square for clicado, ele 'informa' Board, portanto Square é um controlled component
        }}
      />
    );
  }

  function handleClickOnSquare(s) {
    setSquares(() => {
      const newSquares = squares.slice(); // copia os valores para garantir a imutabilidade
      newSquares[s] = currPlayer;

      // define novo currPlayer em Game e checa se squares é vencedor
      onClick(newSquares, s);

      return newSquares;
    });
  }
}

const Container = styled("div")`
  position: relative; /* pois é pai de OverlayedContainer */
  margin: 8px;
`;
const Row = styled("div")`
  display: flex;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const SquaresContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const OverlayedContainer = styled("button").attrs({ disabled: true })`
  position: absolute;
  top: 0;
  /* left: 0; */
  /* color: #fff; */
  border: none;
  text-align: center;
  font-size: 96px; /* TODO: unidade relativa */
  font-weight: 700;
  padding: 0;
  width: 110px;
  height: 110px;
  /* height: calc(3 * 37px - 2px);
  width: calc(3 * 37px - 2px); */
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 1;
    cursor: default;
    
    background-color: ${(props) =>
      props.winner ? "#000" : "rgba(255, 255, 255, 0)"};
  }
`;
