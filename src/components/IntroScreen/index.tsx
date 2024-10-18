// components/IntroScreen.tsx
import React from "react";
import Button from "../Button";

interface IntroScreenProps {
  onNewGame: () => void;
  onHowToPlay: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({
  onNewGame,
  onHowToPlay,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5 bg-[url('./assets/images/intro_bg.png')] bg-cover">
      <div className="fixed bottom-0  max-w-[420px] w-full p-4 pb-6 bg-black rounded-tl-lg rounded-tr-lg border border-white justify-start items-start gap-2 flex">
        <Button variant="primary" onClick={onNewGame} className="w-3/4">
          NEW GAME
        </Button>
        <Button variant="secondary" onClick={onHowToPlay}>
          HOW TO PLAY
        </Button>
      </div>
    </div>
  );
};

export default IntroScreen;
