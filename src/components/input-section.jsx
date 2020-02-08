import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class inputSection extends Component {
  sendData = e => {
    this.props.parentCallback({ amount: e.target.value.replace(/^\D+/g, "") });
  };

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          value={this.state.quantity == 0 ? null : this.state.quantity}
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
