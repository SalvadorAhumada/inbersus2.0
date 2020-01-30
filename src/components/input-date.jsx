import React, { Component } from "react";
import "../style/date.css";

class inputSection extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default inputSection;
