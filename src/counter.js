import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor get called");
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });
  };
  decrement = () => {
    this.setState(state => {
      if (state.counter <= 0) return { counter: 0 };
      return {
        counter: state.counter - 1
      };
    });
  };

  componentDidMount() {
    console.log("ComponentDidMount get called");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate get called - SHOULDNOT RENDER");
      return false;
    }
    console.log("shouldComponentUpdate get called - SHOULDRENDER");
    return true;
  }
  render() {
    console.log("Render get called");
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.increment}> + </button> {`  `}
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate get called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount get called");
  }
}
