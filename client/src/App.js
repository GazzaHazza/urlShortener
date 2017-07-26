import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import URLRedirect from "./views/URLRedirect/URLRedirect";
import Home from "./views/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/:urlCode" component={URLRedirect} />
      </div>
    );
  }
}
export default App;
