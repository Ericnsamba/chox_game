import React from "react";
import XImage from "../../assets/images/x.png";
import OImage from "../../assets/images/o.png";
import './Square-Style.css';

const Square = ({ value, onClick, active }: any) => {
  const getImage = (value: any) => {
    if (value === "X") return XImage;
    if (value === "O") return OImage;
  };

  return (
    <button className={`square ${active ? "active" : ""}`} onClick={onClick}>
      {value && <img src={getImage(value)} alt={value} />}
    </button>
  );
};

export default Square;
