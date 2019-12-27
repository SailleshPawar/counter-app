import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showError: false
    };
  }

  handleIncrement = () => {
    //console.log(product);

    if (this.state.showError) {
      this.setState({ showError: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    //console.log(product);
    if (this.state.counter === 0) {
      this.setState({ showError: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          Current Counter value {this.state.counter}
        </h1>
        <button
          passing
          reference
          to
          the
          function
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
          data-test="incrment-button"
        >
          Increment
        </button>

        <button
          passing
          reference
          to
          the
          function
          onClick={() => this.handleDecrement()}
          className="btn btn-secondary btn-sm"
          data-test="decrement-button"
        >
          Decrement
        </button>
        {this.state.showError && (
          <span data-test="error-message-test">
            Counter cannot be less than 0
          </span>
        )}
      </div>
    );
  }
}

export default App;
