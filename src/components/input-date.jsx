import React, { Component } from "react";
import "../style/date.css";

class inputSection extends Component {
  state = {
    years: [1, 3, 5, 10, 15, 20, 25, 30, 40],
    selectedYear: null
  };

  handleDate = y => {
    this.setState({ selectedYear: y });
    this.props.timeCallback({ year: y });
  };

  render() {
    return (
      <React.Fragment>
        <div className="dropdown">
          <span>
            {this.state.selectedYear === null
              ? "Years..."
              : this.state.selectedYear}
          </span>
          <div className="dropdown-content">
            {this.state.years.map(year => (
              <p
                key={year}
                onClick={() => this.handleDate(year)}
                className="btn btn-secondary btn-sm"
              >
                {year}
              </p>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default inputSection;
