import React, { Component } from "react";
import "./CounterButton.css";
import PropTypes from "prop-types";

class CounterButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          className="btn btn-block btn-success"
          onClick={() => {
            this.props.counterMethod(this.props.by);
          }}
        >
          {this.props.actionLabel}
          {this.props.by}
        </button>
      </>
    );
  }
}

CounterButton.defaultProps = {
  by: 1,
  actionLabel: "+"
};

CounterButton.propTypes = {
  by: PropTypes.number
};

export default CounterButton;
