import React from 'react';
import SmallBoard from './SmallBoard';

const Board = ({ smallBoards, onClick, activeBoard }: any) => (
  <div className="board">
    {smallBoards.map((squares: any, index: number) => (
      <SmallBoard
        key={index}
        squares={squares}
        onClick={(i: number) => onClick(index, i)}
        activeSquare={activeBoard === index ? null : null}
      />
    ))}
  </div>
);

export default Board;
