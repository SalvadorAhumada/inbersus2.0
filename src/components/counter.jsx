// We first import React component
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      // React.fragment prevents the parent div to render
      // You can also use the inline styles directly as an object
      // Ex. style={ { fontWeight: 'bolder' } }
      <React.Fragment>
        <img src={this.state.imageUrl} alt="some random image" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {/* Render lists */}
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  // Dinamic classes
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
