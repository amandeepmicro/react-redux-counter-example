import React, { Component } from "react";
import store from "./store";
import ChangeByValue from "./ChangeByValue";
import "./styles.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: JSON.stringify(store.getState())
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(store.getState());
    this.setState({
      store: store.getState()
    });
  }

  render() {
    return (
      <div className="App">
        <h2 style={{ color: "gold" }}>
          Hello this is an example of counter app using react, redux and hooks
        </h2>
        <hr />
        <h4>Click '+' to increment '-' to decrement by 1</h4>

        <p>The value of counter is {this.props.value} </p>
        <button onClick={() => this.props.incrementByOne()}>+</button>
        <button onClick={() => this.props.decrementByOne()}>-</button>
        <hr />
        <h4>
          Enter number and click '+' to increment '-' to decrement with it.
        </h4>
        <ChangeByValue
          incrementByValue={this.props.incrementByValue}
          decrementByValue={this.props.decrementByValue}
        />
        <hr />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click to display the store
        </button>
        <p>Store: {JSON.stringify(this.state.store)}</p>
      </div>
    );
  }
}

export default Counter;
