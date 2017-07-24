import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginalUrl } from "./../../reducers/url";

class URLRedirect extends Component {
  componentDidMount() {
    const shortCode = this.props.match.params.urlCode;
    this.props.getOriginalUrl && this.props.getOriginalUrl(shortCode);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.url.originalUrl);
    console.log(this.props.url.originalUrl);
    if (nextProps.url.originalUrl !== this.props.url.originalUrl) {
      console.log(
        "nextProps.url.originalUrl",
        nextProps.url.originalUrl.toString()
      );
      window.location = nextProps.url.originalUrl;
    }
  }

  render() {
    return (
      <div className="url-redirect__container">this is redirect component</div>
    );
  }
}
export default connect(
  state => {
    return {
      url: state.url
    };
  },
  {
    getOriginalUrl
  }
)(URLRedirect);
