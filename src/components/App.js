import React from "react";
import styled from "styled-components";
import GlobalStyle from "../utils/GlobalStyle";
import Game from "./Game";
import logo from '../assets/images/Logo512.png';

// TODO: feat: player vs player (local)
export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu>
        <img src={logo} alt="Logo" height={60}/>
        <div className="menuItems">
          <a className="signleMenuItem" href="#about">Meet the makers</a>
          {/* <a className="signleMenuItem" href="#contact">Contact</a> */}
          {/* <RestartButton>New Game</RestartButton> */}
        </div>
        </Menu>
        <Game />
      </Container>
    </>
  );
}

const Container = styled("div")`
  /* height: 100vh; */
  width: 100%;
  /* width: 100vw; */
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled("div")`
  /* width: 80%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 10%);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 16px;
  gap: 100px;
`;


const RestartButton = styled.button`
  padding: 16px 24px;
  font-size: 16px;
  background-color: #0029ff;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.8s ease;
  width: 100%;

  &:hover {
    background-color: #001f99;
  }

  &:focus {
    outline: none;
  }
`;