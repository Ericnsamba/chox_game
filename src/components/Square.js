import React from 'react'
import styled from 'styled-components'

export default function Square({ value, disabled, onClick }) {
  return (
    <Button className="square" disabled={disabled} onClick={onClick}>
      {value}
    </Button>
  )
}

const Button = styled('button')`
  color: black;
  background-color: #fff;
  border: 1px solid #bbb;

  text-align: center;
  font-size: 32px; /* TODO: unidade relativa */
  font-weight: 700;

  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  height: 37px;
  width: 37px;

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
    background-color: white;
  }
`
