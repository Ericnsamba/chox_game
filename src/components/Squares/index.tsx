import React from "react";
import XImage from "../../assets/images/x.png";
import OImage from "../../assets/images/o.png";
import './Square-Style.css';

interface SquareProps {
  value: "X" | "O" | null;
  onClick: () => void;
  active: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, active }) => {
  // Adjust the function to return undefined instead of null
  const getImage = (value: "X" | "O" | null): string | undefined => {
    if (value === "X") return XImage;
    if (value === "O") return OImage;
    return undefined; // Return undefined when there's no image
  };

  return (
    <button
      className={`square ${active ? "active" : ""}`}
      onClick={onClick}
      // disabled={!active}
    >
      {/* Use a conditional rendering approach to only render the img tag if value is not null */}
      {value && <img src={getImage(value)} alt={value} />}
    </button>
  );
};

export default Square;
