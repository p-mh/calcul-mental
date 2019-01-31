import React, { Component } from 'react';
import Calcul from './Calcul';

const addPoint = (prevState, props) => ({
  goodAnswers: Number(prevState.goodAnswers) + 1,
});

export default class Game extends Component {
  state = {
    gameState: null,
    goodAnswers: 0,
    timer: 0,
  };

  addOnePoint = () => {
    this.setState(addPoint);
  };

  render() {
    return (
      <div>
        <Calcul addOnePoint={this.addOnePoint} />
        <p>Good answers: {this.state.goodAnswers}</p>
      </div>
    );
  }
}
