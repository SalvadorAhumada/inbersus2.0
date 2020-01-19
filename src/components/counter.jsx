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

  // Conditional render it's a simple javascript if. It will
  // only render if the array has elements
  conRender() {
    if (this.state.tags.length === 0) return <p>No tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //DOM events. Must use ES6 to acces the this object more easily
  handleIncrement = i => {
    // setEvent is the method of the component class that updates the DOM
    this.setState({ count: this.state.count + i });
  };

  render() {
    return (
      // React.fragment prevents the parent div to render
      // You can also use the inline styles directly as an object
      // Ex. style={ { fontWeight: 'bolder' } }
      <React.Fragment>
        <img src={this.state.imageUrl} alt="some random" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleIncrement(-1)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        {/* Render lists */}
        {/* For conditional render we simply call the method above*/}
        {this.conRender()}
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
    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
