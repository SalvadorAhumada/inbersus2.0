import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class inputSection extends Component {
  sendData = e => {
    let amount = parseInt(
      e.target.value.replace(/^\D+/g, "").replace(/,/g, "")
    );
    this.props.parentCallback({
      amount: amount
    });
  };

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          placeholder="$"
          thousandSeparator={true}
          prefix={"$"}
          onChange={this.sendData}
        />
      </React.Fragment>
    );
  }
}

export default inputSection;
