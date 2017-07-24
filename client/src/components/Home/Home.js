import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sendNewUrl } from "./../../reducers/url";
import "./Home.css";

import UrlForm from "../UrlForm/UrlForm";
class Home extends Component {
  generateNewUrl = url => {
    console.log("url", url);
    this.props.sendNewUrl && this.props.sendNewUrl(url);
  };
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <UrlForm onClickGenerate={this.generateNewUrl} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    url: state.url
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sendNewUrl: bindActionCreators(sendNewUrl, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
