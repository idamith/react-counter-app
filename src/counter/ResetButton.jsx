import React, { Component } from "react";
import "./ResetButton.css";

class ResetButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          className="btn btn-block btn-danger"
          onClick={() => {
            this.props.resetMethod();
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

export default ResetButton;
