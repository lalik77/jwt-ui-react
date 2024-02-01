import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

// const element = App();
// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
