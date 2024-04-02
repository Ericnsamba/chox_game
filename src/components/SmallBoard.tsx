import React from "react";
import Square from "./Squares/index";
import Icon from "../assets/SVG icon/SmallBoard_svg";

const SmallBoard = ({ squares, onClick, activeSquare, isActive, }: any) => {
  const color = isActive ? "#3455ff" : "#CCCCCC"; 
  
  return (
    <div className={`small-board ${isActive ? 'active' : ''}`}>
    {squares.map((value: any, index: number) => (
      <Square
      key={index}
      value={value}
      onClick={() => onClick(index, console.log(" SmallBoard > Square", index))}
      active={activeSquare === index}
      />
      ))}
      <Icon className="small-board-icon" color={color} /> 
  </div>
  );
};

export default SmallBoard;
