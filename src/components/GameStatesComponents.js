import React, { Fragment } from 'react';

import GameBoard from './GameBoard';

import { GameBoardInfos } from './gameStyledComponents';

export const Intro = ({ restart }) => (
  <Fragment>
    <p>You have 15 secondes to answers a maximum of calculs</p>
    <button onClick={restart}>Begin</button>
  </Fragment>
);

export const GameBoardOut = ({ addOnePoint, nbPoints, timer }) => (
  <Fragment>
    <GameBoard addOnePoint={addOnePoint} />
    <GameBoardInfos>
      <div className="point">Good answers: {nbPoints}</div>
      <div className="timer">Time left : {timer}</div>
    </GameBoardInfos>
  </Fragment>
);

export const EndGame = ({ nbPoints, restart }) => (
  <Fragment>
    <p>You made {nbPoints} points</p>
    <button onClick={restart}>Play again</button>
  </Fragment>
);
