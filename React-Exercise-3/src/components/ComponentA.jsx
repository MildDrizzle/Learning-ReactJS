import React, { Component } from "react";
import ComponentB from "./ComponentB";
class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.copmtRef = React.createRef();
  }
  handleClick = () => {
    this.copmtRef.current.handleIncrement();
  };

  render() {
    return (
      <>
        <ComponentB ref={this.copmtRef} />
        <button onClick={this.handleClick}>Increment</button>
      </>
    );
  }
}

export default ComponentA;
