import React, { Component } from "react";

class Fruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Apple",
      type: "Red",
    };
  }

  render() {
    return (
      <>
        My Fruit is a {this.state.name} and it's {this.props.color}
      </>
    );
  }
}

class FruitColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <>
        <Fruit color={this.state.color} />
      </>
    );
  }
}

export default FruitColor;