import React, { useState } from "react";
import styled from "styled-components";
import Game from "./components/Game";
import HowToPlay from "./components/HowToPlay";
import Button from "./components/Button";
import IntroScreen from "./components/IntroScreen";

export default function App(props) {
  const [screen, setScreen] = useState("intro"); // screen state to control which screen is displayed

  const handleNewGame = () => {
    setScreen("game"); // switch to game screen
  };

  const handleHowToPlay = () => {
    setScreen("howtoplay"); // switch to HowToPlay screen
  };

  return (
    <div className="appw-full max-w-[420px] h-screen mx-auto flex items-center justify-center ">
    {/* <div className="app bg-[#9595c3] max-w-[420px]"> */}
      {screen === 'intro' && (
        <IntroScreen onNewGame={handleNewGame} onHowToPlay={handleHowToPlay} />
      )}

      {screen === "game" && (
        <div className="flex flex-col items-center justify-stretch w-full h-screen pt-10 p-1 bg-[pink]t">
          <Game />
        </div>
      )}

      {screen === "howtoplay" && (
        <div className="flex flex-col items-center justify-center w-full h-screen p-5 bg-[#000000]">
          <HowToPlay onClose={() => setScreen('intro')} />
        </div>
      )}
    </div>
  );
}
