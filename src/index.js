import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0
    };
    this.ignoreProp = () => {
      this.setState(state => {
        return {
          ignoreProp: Math.random()
        };
      });
    };
  }
  mountComponent = () => {
    this.setState(state => {
      return {
        mount: true
      };
    });
  };
  unMountComponent = () => {
    this.setState(state => {
      return {
        mount: false
      };
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.ignoreProp}>IgnoreProp</button>
        <br />
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} />
        ) : null}
        <br />
        <button onClick={this.mountComponent} disabled={this.state.mount}>
          Mount Component
        </button>{" "}
        <button onClick={this.unMountComponent} disabled={!this.state.mount}>
          Unmount Component
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
