import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class roiSelection extends Component {
  sendData = e => {
    let roi = parseInt(
      e.target.value.replace(/^\D+/g, "").slice(0, e.target.value.length - 1)
    );

    this.props.roiCallback({ roi: roi });
  };

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          placeholder="%"
          thousandSeparator={false}
          suffix={"%"}
          onChange={this.sendData}
        />
      </React.Fragment>
    );
  }
}

export default roiSelection;
