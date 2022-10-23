import React, { Component } from "react";

export default class Visibility extends Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isToggle: false,
    };
  }
  handleToggle() {
    this.setState((preState)=>{
       return {...this.state , isToggle: !preState.isToggle}
    })
  }
  render() {
    return (
      <div>
        <h1>Visibilty Toggle</h1>
        <button onClick={this.handleToggle}>Hide Details</button>
        {
            this.state.isToggle && (
                <div>
                    <p>Hey implemented toggle</p>
                </div>
            )
        }
      </div>
    );
  }
}
