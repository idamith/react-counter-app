import React, { Component } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <>
        <table>
          <tr>
            <td>
              <CounterButton by={1} counterMethod={this.increment} />
              <CounterButton by={2} counterMethod={this.increment} />
              <CounterButton by={3} counterMethod={this.increment} />
              <CounterButton by={4} counterMethod={this.increment} />
            </td>
            <td>
              <CounterButton
                by={6}
                actionLabel="-"
                counterMethod={this.decrement}
              />
              <CounterButton
                by={7}
                actionLabel="-"
                counterMethod={this.decrement}
              />
              <CounterButton
                by={8}
                actionLabel="-"
                counterMethod={this.decrement}
              />
              <CounterButton
                by={9}
                actionLabel="-"
                counterMethod={this.decrement}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span className="counter">{this.state.count}</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <ResetButton resetMethod={this.reset} />
            </td>
          </tr>
        </table>
      </>
    );
  }

  increment = by => {
    this.setState(prevState => {
      return { count: prevState.count + by };
    });
  };

  decrement = by => {
    this.setState(prevState => {
      return { count: prevState.count - by };
    });
  };

  reset = () => {
    this.setState(() => {
      return { count: 0 };
    });
  };
}

export default Counter;
