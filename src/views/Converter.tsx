import { Component } from 'react';

const toCelsius = (fahrenheit: number) => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

const toFahrenheit = (celsius: number) => {
  return Math.round((celsius * 9) / 5 + 32);
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { celsius: '', fahrenheit: '' };
  }

  handleCelsiusChange = (event) => {
    const updatedState = {
      celsius: event.target.value,
      fahrenheit: String(toFahrenheit(Number(event.target.value))),
    };

    this.setState((prevousState) => ({
      ...prevousState,
      ...updatedState,
    }));
  };

  handleFahrenheitChange = (event) => {
    const updatedState = {
      celsius: String(toCelsius(Number(event.target.value))),
      fahrenheit: event.target.value,
    };

    this.setState((prevousState) => ({
      ...prevousState,
      ...updatedState,
    }));
  };

  render() {
    return (
      <div className="flex gap-2">
        <label>
          Celsius
          <input
            type="number"
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
          />
        </label>
        <label>
          Fahrenheit
          <input
            type="number"
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
          />
        </label>
      </div>
    );
  }
}

export default Counter;
