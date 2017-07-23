import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import URLRedirect from "./components/URLRedirect/URLRedirect";
import Home from "./components/Home/Home";
import { Gradient } from "uigradients";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gradient gradient="cosmic_fusion">
          <Route exact path="/" component={Home} />

          <Route path="/:urlCode" component={URLRedirect} />
        </Gradient>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return { search: state.search };
}
export default connect(mapStateToProps)(App);
