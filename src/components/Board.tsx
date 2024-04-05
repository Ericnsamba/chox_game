import React from 'react';
import SmallBoard from './SmallBoard';

const Board = ({ smallBoards, onClick, activeBoard }: any) => (
  <div className="board">
    {smallBoards.map((board: { squares: any; winner: any; }, index: any) => (
      <SmallBoard
        key={index}
        squares={board.squares}
        onClick={(squareIndex: any) => onClick(index, squareIndex)}
        isActive={activeBoard === index}
        winner={board.winner}
      />
    ))}
  </div>
);

export default Board;
