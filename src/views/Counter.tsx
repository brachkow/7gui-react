import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleIncrement = () => {
    this.setState((state) => {
      return { ...state, value: state.value + 1 };
    });
  };

  render() {
    return (
      <div className="flex gap-2">
        <div>{this.state.value}</div>
        <button onClick={this.handleIncrement}>Count</button>
      </div>
    );
  }
}

export default Counter;
