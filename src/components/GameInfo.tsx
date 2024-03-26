import React from 'react';

const GameInfo = ({ status, onNewGame, onShowRules }: any) => (
  <div className="game-info">
    <div className="status">{status}</div>
    <div className="button_wrapper">
    <button className='button_newGame' onClick={onNewGame}>New Game</button>
    <button className='how_to_Play' onClick={onShowRules}>How to Play</button>
    </div>
   
  </div>
);

export default GameInfo;
