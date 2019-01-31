import React, { Component } from 'react';
import Calcul from './Calcul';

const PLAY = 'PLAY';
const END = 'END';

const addPoint = (prevState, props) => ({
  goodAnswers: Number(prevState.goodAnswers) + 1,
});

export default class Game extends Component {
  state = {
    gameState: PLAY,
    goodAnswers: 0,
    timer: null,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      this.endGame();
    }
  }

  restart = () => {
    this.setState({
      gameState: PLAY,
      goodAnswers: 0,
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
    const gameBoard = (
      <div>
        <Calcul addOnePoint={this.addOnePoint} />
        <p>
          Good answers: {this.state.goodAnswers} | Time left :{' '}
          {this.state.timer}
        </p>
      </div>
    );

    const endGame = (
      <div>
        <p>You made {this.state.goodAnswers} points</p>
        <button onClick={this.restart}>Play again</button>
      </div>
    );

    return (
      <div>
        {this.state.gameState === PLAY && gameBoard}
        {this.state.gameState === END && endGame}
      </div>
    );
  }
}
