import React, { Component } from 'react';

const RESETSTATE = {
  nbsToCalcul: [],
  answer: null,
  inputValue: '',
};

export default class Game extends Component {
  state = RESETSTATE;
  componentDidMount() {
    this.generateNewCalcul();
  }

  generateNewCalcul = () => {
    if (!this.state.nbsToCalcul.length) {
      const nb1 = Math.floor(Math.random() * 10);
      const nb2 = Math.floor(Math.random() * 10);
      this.setState({
        nbsToCalcul: [nb1, nb2],
        answer: nb1 + nb2,
      });
    }
  };

  onChange = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  };

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.try();
    }
  };

  try = () => {
    if (Number(this.state.inputValue) === this.state.answer) {
      this.setState(RESETSTATE, this.generateNewCalcul);
    }
  };

  render() {
    return (
      <div>
        <p>
          {this.state.nbsToCalcul[0]} + {this.state.nbsToCalcul[1]}
        </p>
        <input
          type="text"
          onChange={e => this.onChange(e)}
          value={this.state.inputValue}
          onKeyDown={e => this.onKeyDown(e)}
        />
        <button onClick={this.try}>Try</button>
      </div>
    );
  }
}
