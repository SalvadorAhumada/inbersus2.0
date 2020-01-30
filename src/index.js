// This is the entrypoint of our app
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";

// First argument is the element we want to render
// Second element is where we want to render it in our index.hml file
ReactDOM.render(<Main />, document.getElementById("root"));
