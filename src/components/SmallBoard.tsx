import React from "react";
import Square from "./Squares/index";
import Icon from "../assets/SVG icon/SmallBoard_svg";

const SmallBoard = ({ squares, onClick, winner, isActive }: any) => {
  const boardSquares = winner ? Array(9).fill(winner) : squares;
  const color = isActive ? "#3455ff" : "#CCCCCC"; 

  return (
    <div className={`small-board ${isActive ? 'active' : ''}`}>
      {boardSquares.map((value: any, index: any) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)} 
          active={false}        />
      ))}
      <Icon className="small-board-icon" color={color} />
    </div>
  );
};

export default SmallBoard;
