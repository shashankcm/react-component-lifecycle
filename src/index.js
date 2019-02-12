import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
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
  seedGenerator = () => {
    this.setState(state => {
      return {
        seed: Number.parseInt(Math.random() * 100)
      };
    });
  };
  showErrorComponentInCounter = () => {
    this.setState(state => {
      return {
        showErrorComponent: true
      };
    });
  };
  donotShowErrorComponentInCounter = () => {
    this.setState(state => {
      return {
        showErrorComponent: false
      };
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.ignoreProp}>IgnoreProp</button>{" "}
        <button onClick={this.seedGenerator}>Generate Seed</button>{" "}
        <button onClick={this.showErrorComponentInCounter}>
          Error Component
        </button>{" "}
        <button onClick={this.donotShowErrorComponentInCounter}>
          Do not show Error Component
        </button>
        <br />
        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
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
