import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleIncrease = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
