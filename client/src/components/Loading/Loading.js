import React, { Component } from "react";
import "./Loading.css";
class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <span className="fa fa-spinner fa-pulse loading__icon" />
      </div>
    );
  }
}
export default Loading;
