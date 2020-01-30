/*
  This is a Class Based Component. This type of component
  can have a state Object.


  INDEX:
  -How to pass props (methods or data) to child objects.
  -How to use and update the state of the component.
*/

// We first import React component
import React, { Component } from "react";
/* We also can import nested components and use them as
a html tag in the render method of our component*/
import Person from "./functionalComponent";

class ClassBased extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    msg: "Click me for recomendations!",
    tags: ["tag1", "tag2", "tag3"],
    movies: [
      "The Dark knight",
      "Shawshak redemption",
      "Fight Club",
      "Hateful eight",
      "Watchmen",
      "Se7en",
      "Reservoir Dogs",
      "Django Unchained",
      "Inglorious Basterds",
      "Tennet",
      "Iron man",
      "Inception",
      "Deja vu",
      "This is the end"
    ],
    movie: "How about...",
    number: null
  };

  //DOM events. Must use ES6 to acces the this object more easily
  handleIncrement = i => {
    // setEvent is the method of the component class that updates the DOM
    this.setState({ count: this.state.count + i });
  };

  selectMovieHandler = () => {
    let n = Math.floor(Math.random() * 14);
    if (n === this.state.number) {
      this.selectMovieHandler();
      return;
    }
    this.setState({
      movie: this.state.movies[n],
      number: n
    });
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

  render() {
    return (
      // React.fragment prevents the parent div to render
      // You can also use the inline styles directly as an object
      // Ex. style={ { fontWeight: 'bolder' } }
      <React.Fragment>
        <h2>This is a class based component!</h2>
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
        <Person name="Chabat" age="29" />
        {/*We can call methods from parents components with props
        
        i.e:
        
        <Person click={this.handleIncrement} />

        we call it inside the son component with 'onClick={props.click}'

        The method can also pass information with .bind and passing the element in the 
        method of the parent component

        i.e

        this.setState=({
          number:newValue
        })

        handleIncrement = (newValue) =>{}

        <person click={this.handleIncrement.bind(this, 1)}>

        Alternative syntax on parent:

        <button onClick={() => this.handleIncrement(1)}

        
        */}
        <h2>movieRecommendator.js</h2>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.selectMovieHandler}
        >
          {this.state.msg}
        </button>
        <p>{this.state.movie}</p>
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

export default ClassBased;
