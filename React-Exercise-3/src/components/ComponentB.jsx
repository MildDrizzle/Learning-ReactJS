import React, { Component } from "react";
class ComponentB extends Component {
  state = { count: 0 };
  handleIncrement = () => {
    const coun = this.state.count + 1;
    this.setState({ count: coun });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default ComponentB;
