import React, { Component } from 'react';

import { Intro, GameBoardOut, EndGame } from './GameStatesComponents';

import { INTRO, PLAY, END } from './constantes';

const addPoint = (prevState, props) => ({
  nbPoints: Number(prevState.nbPoints) + 1,
});

export default class Game extends Component {
  state = {
    gameState: INTRO,
    nbPoints: 0,
    timer: null,
  };

  componentDidUpdate() {
    this.state.timer === 0 && this.endGame();
  }

  restart = () => {
    this.setState({
      gameState: PLAY,
      nbPoints: 0,
    });
    this.startTimer();
  };

  endGame = () => {
    clearInterval(this.timer);
    this.setState({
      timer: null,
      gameState: END,
    });
  };

  addOnePoint = () => {
    this.setState(addPoint);
  };

  startTimer = () => {
    const endTime = Date.now() + 16000;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const timeLeft = endTime - Date.now();

      const secondes = Math.floor(timeLeft / 1000);
      this.setState({
        timer: secondes,
      });
    }, 100);
  };

  render() {
    const { nbPoints, timer, gameState } = this.state;

    const gameStates = {
      INTRO: <Intro restart={this.restart} />,
      PLAY: (
        <GameBoardOut
          addOnePoint={this.addOnePoint}
          timer={timer}
          nbPoints={nbPoints}
        />
      ),
      END: <EndGame restart={this.restart} nbPoints={nbPoints} />,
    };

    return <div className="game">{gameStates[gameState]}</div>;
  }
}
