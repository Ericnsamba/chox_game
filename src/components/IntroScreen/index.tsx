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
      <div className="flex w-full justify-end relative right-[-16px] top-[-80px]">
        <svg
          width="28"
          height="131"
          viewBox="0 0 28 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1998_21944" fill="white">
            <path d="M28 0L28 131L3.99999 131C1.79086 131 -5.64791e-06 129.209 -5.55135e-06 127L-1.74845e-07 4C-7.82809e-08 1.79086 1.79086 -1.14564e-06 4 -1.04907e-06L28 0Z" />
          </mask>
          <path
            d="M28 0L28 131L3.99999 131C1.79086 131 -5.64791e-06 129.209 -5.55135e-06 127L-1.74845e-07 4C-7.82809e-08 1.79086 1.79086 -1.14564e-06 4 -1.04907e-06L28 0Z"
            fill="black"
          />
          <path
            d="M28 0L28 131L28 0ZM3.99999 132C1.23857 132 -1.00001 129.761 -1.00001 127L-1 4C-1 1.23857 1.23858 -1 4 -1L4 0.999999C2.34315 0.999999 1 2.34314 1 4L0.999994 127C0.999994 128.657 2.34314 130 3.99999 130L3.99999 132ZM-1 4C-1 1.23857 1.23858 -1 4 -1L28 -1L28 1L4 0.999999C2.34315 0.999999 1 2.34314 1 4L-1 4ZM28 132L3.99999 132C1.23857 132 -1.00001 129.761 -1.00001 127L0.999994 127C0.999994 128.657 2.34314 130 3.99999 130L28 130L28 132Z"
            fill="white"
            mask="url(#path-1-inside-1_1998_21944)"
          />
          <path
            d="M9 8.658L10.344 8.658L10.344 9.974L17.456 9.974L17.456 8.658L18.8 8.658L18.8 13.628C18.8 14.216 18.6973 14.7293 18.492 15.168C18.296 15.6067 18.0113 15.9473 17.638 16.19C17.274 16.442 16.84 16.568 16.336 16.568L16.196 16.568C15.748 16.568 15.3793 16.484 15.09 16.316C14.8007 16.148 14.5767 15.9427 14.418 15.7C14.2593 15.4667 14.1473 15.2427 14.082 15.028L13.858 15.028C13.802 15.2427 13.69 15.4713 13.522 15.714C13.3633 15.966 13.1393 16.176 12.85 16.344C12.5607 16.5213 12.1827 16.61 11.716 16.61L11.576 16.61C11.0347 16.61 10.5727 16.484 10.19 16.232C9.80733 15.98 9.51333 15.63 9.308 15.182C9.10267 14.7433 9 14.2347 9 13.656L9 8.658ZM10.372 11.5L10.372 13.474C10.372 13.978 10.4933 14.3747 10.736 14.664C10.9787 14.9533 11.3147 15.098 11.744 15.098L11.87 15.098C12.2993 15.098 12.6353 14.9533 12.878 14.664C13.1207 14.384 13.242 13.9873 13.242 13.474L13.242 11.5L10.372 11.5ZM14.628 11.5L14.628 13.474C14.628 13.95 14.7447 14.3327 14.978 14.622C15.2207 14.9113 15.5473 15.056 15.958 15.056L16.098 15.056C16.5087 15.056 16.8307 14.9113 17.064 14.622C17.3067 14.342 17.428 13.9593 17.428 13.474L17.428 11.5L14.628 11.5ZM8.804 21.1332C8.804 20.3585 8.944 19.6912 9.224 19.1312C9.504 18.5805 9.90533 18.1512 10.428 17.8432C10.96 17.5445 11.604 17.3952 12.36 17.3952L18.8 17.3952L18.8 18.9212L12.318 18.9212C11.6273 18.9212 11.0953 19.1125 10.722 19.4952C10.3487 19.8779 10.162 20.4239 10.162 21.1332C10.162 21.8425 10.3487 22.3885 10.722 22.7712C11.0953 23.1539 11.6273 23.3452 12.318 23.3452L18.8 23.3452L18.8 24.8572L12.36 24.8572C11.604 24.8572 10.96 24.7079 10.428 24.4092C9.90533 24.1105 9.504 23.6812 9.224 23.1212C8.944 22.5612 8.804 21.8985 8.804 21.1332ZM9 25.9904L18.8 25.9904L18.8 27.5024L9 27.5024L9 25.9904ZM9 28.7051L18.8 28.7051L18.8 30.2171L10.372 30.2171L10.372 34.9351L9 34.9351L9 28.7051ZM9 36.5195L17.428 36.5195L17.428 33.5095L18.8 33.5095L18.8 41.0415L17.428 41.0415L17.428 38.0315L9 38.0315L9 36.5195ZM9 43.5399L10.344 43.5399L10.344 44.8559L17.456 44.8559L17.456 43.5399L18.8 43.5399L18.8 48.5099C18.8 49.0979 18.6973 49.6112 18.492 50.0499C18.296 50.4885 18.0113 50.8292 17.638 51.0719C17.274 51.3239 16.84 51.4499 16.336 51.4499L16.196 51.4499C15.748 51.4499 15.3793 51.3659 15.09 51.1979C14.8007 51.0299 14.5767 50.8245 14.418 50.5819C14.2593 50.3485 14.1473 50.1245 14.082 49.9099L13.858 49.9099C13.802 50.1245 13.69 50.3532 13.522 50.5959C13.3633 50.8479 13.1393 51.0579 12.85 51.2259C12.5607 51.4032 12.1827 51.4919 11.716 51.4919L11.576 51.4919C11.0347 51.4919 10.5727 51.3659 10.19 51.1139C9.80733 50.8619 9.51333 50.5119 9.308 50.0639C9.10266 49.6252 9 49.1165 9 48.5379L9 43.5399ZM10.372 46.3819L10.372 48.3559C10.372 48.8599 10.4933 49.2565 10.736 49.5459C10.9787 49.8352 11.3147 49.9799 11.744 49.9799L11.87 49.9799C12.2993 49.9799 12.6353 49.8352 12.878 49.5459C13.1207 49.2659 13.242 48.8692 13.242 48.3559L13.242 46.3819L10.372 46.3819ZM14.628 46.3819L14.628 48.3559C14.628 48.8319 14.7447 49.2145 14.978 49.5039C15.2207 49.7932 15.5473 49.9379 15.958 49.9379L16.098 49.9379C16.5087 49.9379 16.8307 49.7932 17.064 49.5039C17.3067 49.2239 17.428 48.8412 17.428 48.3559L17.428 46.3819L14.628 46.3819ZM9 54.676L12.556 54.676L18.8 51.274L18.8 52.982L14.362 55.334L14.362 55.544L18.8 57.896L18.8 59.604L12.556 56.202L9 56.202L9 54.676Z"
            fill="white"
          />
          <path
            d="M9 66.36L17.428 66.36L17.428 63.35L18.8 63.35L18.8 70.882L17.428 70.882L17.428 67.872L9 67.872L9 66.36ZM9 71.4125L18.8 71.4125L18.8 72.9245L14.6 72.9245L14.6 77.0405L18.8 77.0405L18.8 78.5525L9 78.5525L9 77.0405L13.228 77.0405L13.228 72.9245L9 72.9245L9 71.4125ZM9 79.76L18.8 79.76L18.8 85.934L17.428 85.934L17.428 81.272L14.614 81.272L14.614 85.542L13.242 85.542L13.242 81.272L10.372 81.272L10.372 86.004L9 86.004L9 79.76ZM9 89.1046L10.344 89.1046L10.344 90.4206L17.456 90.4206L17.456 89.1046L18.8 89.1046L18.8 94.0746C18.8 94.6626 18.6973 95.176 18.492 95.6146C18.296 96.0533 18.0113 96.394 17.638 96.6366C17.274 96.8886 16.84 97.0146 16.336 97.0146L16.196 97.0146C15.748 97.0146 15.3793 96.9306 15.09 96.7626C14.8007 96.5946 14.5767 96.3893 14.418 96.1466C14.2593 95.9133 14.1473 95.6893 14.082 95.4746L13.858 95.4746C13.802 95.6893 13.69 95.918 13.522 96.1606C13.3633 96.4126 13.1393 96.6226 12.85 96.7906C12.5607 96.968 12.1827 97.0566 11.716 97.0566L11.576 97.0566C11.0347 97.0566 10.5727 96.9306 10.19 96.6786C9.80733 96.4266 9.51333 96.0766 9.308 95.6286C9.10267 95.19 9 94.6813 9 94.1026L9 89.1046ZM10.372 91.9466L10.372 93.9206C10.372 94.4246 10.4933 94.8213 10.736 95.1106C10.9787 95.4 11.3147 95.5446 11.744 95.5446L11.87 95.5446C12.2993 95.5446 12.6353 95.4 12.878 95.1106C13.1207 94.8306 13.242 94.434 13.242 93.9206L13.242 91.9466L10.372 91.9466ZM14.628 91.9466L14.628 93.9206C14.628 94.3966 14.7447 94.7793 14.978 95.0686C15.2207 95.358 15.5473 95.5026 15.958 95.5026L16.098 95.5026C16.5087 95.5026 16.8307 95.358 17.064 95.0686C17.3067 94.7886 17.428 94.406 17.428 93.9206L17.428 91.9466L14.628 91.9466ZM9 97.1155L18.8 99.9155L18.8 102.575L9 105.361L9 103.807L11.31 103.163L11.31 99.3275L9 98.6835L9 97.1155ZM12.71 99.7055L12.71 102.785L17.862 101.357L17.862 101.133L12.71 99.7055ZM9 105.849L18.8 105.849L18.8 108.761L10.008 111.421L10.008 111.645L18.8 111.645L18.8 113.143L9 113.143L9 110.231L17.806 107.571L17.806 107.347L9 107.347L9 105.849ZM8.804 117.749C8.804 117.049 8.95333 116.424 9.252 115.873C9.56 115.322 10.008 114.888 10.596 114.571C11.184 114.254 11.9027 114.095 12.752 114.095L15.048 114.095C16.3267 114.095 17.302 114.445 17.974 115.145C18.6553 115.845 18.996 116.792 18.996 117.987C18.996 119.163 18.674 120.068 18.03 120.703C17.3953 121.338 16.5413 121.655 15.468 121.655L15.398 121.655L15.398 120.157L15.51 120.157C15.9113 120.157 16.2707 120.078 16.588 119.919C16.9147 119.76 17.1713 119.522 17.358 119.205C17.5447 118.888 17.638 118.482 17.638 117.987C17.638 117.24 17.4093 116.657 16.952 116.237C16.504 115.817 15.8787 115.607 15.076 115.607L12.724 115.607C11.9307 115.607 11.3007 115.817 10.834 116.237C10.3767 116.657 10.148 117.245 10.148 118.001C10.148 118.748 10.3533 119.294 10.764 119.639C11.1747 119.984 11.7067 120.157 12.36 120.157L12.542 120.157L12.542 117.525L13.844 117.525L13.844 121.655L9 121.655L9 120.255L9.994 120.255L9.994 120.031C9.81666 119.947 9.63466 119.821 9.448 119.653C9.26133 119.494 9.10733 119.261 8.986 118.953C8.86466 118.654 8.804 118.253 8.804 117.749Z"
            fill="#3455FF"
          />
        </svg>
      </div>
      <div className="fixed bottom-0  max-w-[420px] w-full p-4 pb-6 bg-black rounded-tl-lg rounded-tr-lg border border-white justify-start items-start gap-2 flex">
        <Button
          variant="primary"
          onClick={onNewGame}
          className="w-3/4 bg-blue text-white"
        >
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
