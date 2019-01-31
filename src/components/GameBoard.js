import React, { Component } from 'react';

import { RESET_STATE_GAMEBOARD } from './constantes';

import { Question, Answer } from './gameBoardStyledComponents';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = RESET_STATE_GAMEBOARD;
    this.el = null;
  }

  componentDidMount() {
    this.generateQuestion();
    this.el.focus();
  }

  generateQuestion = () => {
    const nb1 = Math.floor(Math.random() * 10 + 1);
    const nb2 = Math.floor(Math.random() * 10 + 1);
    this.setState({
      nbsToCalcul: [nb1, nb2],
      answer: nb1 * nb2,
    });
  };

  onChange = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  };

  onKeyDown = ({ key }) => key === 'Enter' && this.tryAnswer();

  tryAnswer = () => {
    const { inputValue, answer } = this.state;
    if (Number(inputValue) === answer) {
      this.setState(RESET_STATE_GAMEBOARD, this.generateQuestion);
      this.props.addOnePoint();
    } else {
      this.setState({
        isFalseAnswer: true,
      });
    }
  };

  render() {
    const { nbsToCalcul, inputValue, isFalseAnswer } = this.state;
    return (
      <div className="gameBoard">
        <Question>
          {nbsToCalcul[0]} x {nbsToCalcul[1]}
        </Question>
        <Answer
          type="text"
          onChange={this.onChange}
          value={inputValue}
          onKeyDown={this.onKeyDown}
          ref={el => (this.el = el)}
          falseAnswer={isFalseAnswer}
        />
      </div>
    );
  }
}
