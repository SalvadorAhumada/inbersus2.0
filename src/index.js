// This is the entrypoint of our app
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const element = <h1>Hello World</h1>;
// First argument is the element we want to render
// Second element is where we want to render it in our index.hml file
ReactDOM.render(element, document.getElementById('root'))