import React, { Component } from "react";

class LifecycleComponent extends Component {
  // Constructor for initializing state and binding methods
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
      favoritecolor:'Red'
    };
  }

  // Static method for updating state based on props (rarely used)
//   The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
//   This is the natural place to set the state object based on the initial props.
//   It takes state as an argument, and returns an object with changes to the state.

//--UseEffect with dependency
  static getDerivedStateFromProps(props, state) {
  
    console.log("getDerivedStateFromProps");
    console.log("props:", props);
    console.log("state:", state);
    return {count: state.count };
    
  //  return null;
  }

  // Called after the component is rendered for the first time
  //useEffect with empty dependency
  componentDidMount() {
    console.log("componentDidMount");
  }

  // Called after a component's props or state are updated
  // it contains two parameters prevProps and prevState
  // which are used to compare the previous values
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    
  }

  // Called before the component is removed from the DOM
  //--effect cleanup
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //  method to increment the count in the state
  incrementCount = () => {
   // this.setState({ });
    this.setState({ count: this.state.count + 1,
                    favoritecolor: 'blue' });
  };

  // Render method to render the JSX
  render() {
    console.log("render");
    return (
      <div>
       
        <h1>Color: {this.state.favoritecolor}</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

class UnMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  // method to toggle the component 
  toggleComponent = () => {
    
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div>
       
        <button onClick={this.toggleComponent}>Toggle Component</button>
        {this.state.showComponent && <LifecycleComponent count={55}/>}
      </div>
    );
  }
}

export default UnMount;