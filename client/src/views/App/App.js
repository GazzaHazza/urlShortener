import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import URLRedirect from "../URLRedirect/URLRedirect";
import Home from "../Home/Home";
import store from "../../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/:urlCode" component={URLRedirect} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
