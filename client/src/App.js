import React, { Component } from "react";
import { connect } from "react-redux";
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
function mapStateToProps(state, props) {
  return { search: state.search };
}
export default connect(mapStateToProps)(App);
