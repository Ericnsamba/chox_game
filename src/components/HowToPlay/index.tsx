// components/HowToPlay.tsx
import React, { useState } from "react";
import Button from "../Button";

type Step = {
  id: number;
  title: string;
  content: string;
  image: string; // Added image property for each step
};

const steps: Step[] = [
  {
    id: 1,
    title: "The game",
    content: "There are 9 games...",
    image: "/media/game_step_1.png", // Placeholder image
  },
  {
    id: 2,
    title: "The game",
    content: "Inside 1 match.",
    image: "/media/game_step_2.png", // Placeholder image
  },
  {
    id: 3,
    title: "The first move",
    content:
      "Whoever plays first can play their piece in any square, in any game.",
    image: "/media/game_step_3.png", // Placeholder image
  },
  {
    id: 4,
    title: "The next move",
    content:
      "This determines which game the next player must make a move in. If Bob played middle-right...",
    image: "/media/game_step_4.png", // Placeholder image
  },
  {
    id: 5,
    title: "The next move",
    content: "Then Barb must play in the middle-right game of the match.",
    image: "/media/game_step_5.png", // Placeholder image
  },
  {
    id: 6,
    title: "The next move",
    content: "So Barb plays top-left...",
    image: "/media/game_step_6.png", // Placeholder image
  },
  {
    id: 7,
    title: "The next move",
    content: "Sending Bob back to play in top-left game of the match.",
    image: "/media/game_step_7.png", // Placeholder image
  },
  {
    id: 8,
    title: "Winning a game",
    content:
      "When you get 3 in a row, you win the game. Whatever move on the game, the next player plays in the corresponding game.",
    image: "/media/game_step_8.png", // Placeholder image
  },
  {
    id: 9,
    title: "The free move",
    content:
      "If a game has been won, and you get sent to play there, you can go anywhere you want in the match.",
    image: "/media/game_step_9.png", // Placeholder image
  },
  {
    id: 10,
    title: "Winning the match",
    content:
      "Like in OG Naughts & Crosses, when you get 3 in a row in the match, you’ve won.",
    image: "/media/game_step_10.png", // Placeholder image
  },
];

interface HowToPlayProps {
  onClose: () => void; // Function to handle closing or going back
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg p-4 border border-white flex flex-col gap-4">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <h2 className="text-base">
            {currentStep + 1}/{steps.length} · {steps[currentStep].title}
          </h2>
          <button
            className="text-white bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
            onClick={onClose} // Trigger the onClose callback passed from the parent
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="white"
              />
              <path d="M8 8L24 24" stroke="white" />
              <path d="M24 8L8 24" stroke="white" />
            </svg>
          </button>
        </div>
        {/* Step Content */}
        <div className="min-h-[72px]">
          <p className="">{steps[currentStep].content}</p>
        </div>
      </div>

      {/* Image Section */}
      <img
        src={steps[currentStep].image}
        alt={steps[currentStep].title}
        className="mb-4 w-full h-[45.8vh] object-cover rounded bg-black"
      />

      <div className="flex justify-between gap-2">
        {/* Navigation Buttons */}
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`w-2/4 ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-500"
          }`}
        >
          Back
        </Button>
        <Button
          variant="primary"
          className={`w-2/4 bg-white ${
            currentStep === steps.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>

        {/* <button
          className={`p-2 bg-gray-600 text-white rounded ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-500"
          }`}
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Back
        </button> */}
        {/* <button
          className={`p-2 bg-white text-black rounded ${
            currentStep === steps.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default HowToPlay;
