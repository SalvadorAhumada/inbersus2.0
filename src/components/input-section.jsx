import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class inputSection extends Component {
  state = {
    quantity: 0
  };

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          value={this.state.quantity == 0 ? null : this.state.quantity}
          placeholder="$"
          thousandSeparator={true}
          prefix={"$"}
        />
      </React.Fragment>
    );
  }
}

export default inputSection;
