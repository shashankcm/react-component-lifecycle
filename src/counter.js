import React from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor get called");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      error: "",
      info: ""
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
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps get called");
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate get called");
    return null;
  }
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
    const { error } = this.state;
    if (this.props.showErrorComponent && error) {
      return (
        <div>
          Error Occured please resolve and render again --> {error.message}
        </div>
      );
    }
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.increment}> + </button> {`  `}
        <button onClick={this.decrement}> - </button>
        <br />
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate get called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount get called");
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch Method called");
    this.setState({
      error: error,
      info: info
    });
  }
}
