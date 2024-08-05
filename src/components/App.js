import React from "react";
import styled from "styled-components";
import GlobalStyle from "../utils/GlobalStyle";
import Game from "./Game";

// TODO: feat: player vs player (local)
export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu></Menu>
        <Game />
      </Container>
    </>
  );
}

const Container = styled("div")`
  height: 100vh;
  width: 100%;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  font-family: "Helvetica", Futura, sans-serif;
`;

const Menu = styled("div")`
  height: 98px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 10%);
  backdrop-filter: blur(5px);
  border-radius: 12px;
`;
