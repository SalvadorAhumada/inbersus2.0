import React, { Component } from "react";
import "../style/input.css";
import NumberFormat from "react-number-format";

class inputSection extends Component {
  state = {
    quantity: 0
  };

  handleChange = e => {
    if (isNaN(e.target.value)) {
      return;
    }
    this.setState({
      quantity: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <NumberFormat
          placeholder="$$$$"
          thousandSeparator={true}
          prefix={"$"}
        />
        <button>Make it rain</button>
      </React.Fragment>
    );
  }
}

export default inputSection;
