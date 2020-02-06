import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class inputSection extends Component {
  state = {
    quantity: 0
  };

  sendData = () => {
    this.props.parentCallback({ amount: this.state.quantity });
  }

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          placeholder="$$$$"
          thousandSeparator={true}
          prefix={"$"}
          onChange={this.sendData}
        />
      </React.Fragment>
    );
  }
}

export default inputSection;
