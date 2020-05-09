import React, { Component } from "react";
import "../style/input.css";
import Welcome from "./Welcome.js";

class Main extends Component {
  state = {
    welcome: true,
  };
  render() {
    return (
      <section>
        Hello!
        <Welcome />
      </section>
    );
  }
}

export default Main;
