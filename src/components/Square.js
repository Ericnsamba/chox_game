import React from 'react';
import styled from 'styled-components';
import IconX from '../assets/SVG icon/XIcon';
import IconO from '../assets/SVG icon/OIcon';


export default function Square({ value, disabled, onClick }) {
  return (
    <Button className="square" disabled={disabled} onClick={onClick}>
      {value === 'X' && <IconX fill="#0029FF" width={28} height={28}/>}
      {value === 'O' && <IconO fill="#ffffff" width={28} height={28}/>}
    </Button>
  );
}

const Button = styled.button`
  background: none;
  border: none;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  height: 37px;
  width: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: #0000000e;
  }
  &:disabled {
    opacity: 1;
    cursor: default;
    background-color: none;
  }
`;