import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.handelAddOne = this.handelAddOne.bind(this);
    this.handelMinusOne = this.handelMinusOne.bind(this);
    this.handelReset = this.handelReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handelAddOne() {
    this.setState((prevState) => {
      return { ...this.state, count: prevState.count + 1 };
    });
  }

  handelMinusOne() {
    this.setState((prevState) => {
      return { ...this.state, count: (prevState.count < 0)? (prevState.count- 1) : 0 };
    });
  }

  handelReset() {
    this.setState(() => {
      return { ...this.state, count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handelAddOne}>+1</button>
        <button onClick={this.handelMinusOne}>-1</button>
        <button onClick={this.handelReset}>Reset</button>
      </div>
    );
  }
}
