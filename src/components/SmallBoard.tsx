import React from "react";
import Square from "./Squares/index";

const SmallBoard = ({ squares, onClick, activeSquare }: any) => (
  <div className="small-board">
    {squares.map((value: any, index: number) => (
      <Square
        key={index}
        value={value}
        onClick={() => onClick(index, console.log(" SmallBoard > Square", index))}
        active={activeSquare === index}
      />
    ))}
  </div>
);

export default SmallBoard;
