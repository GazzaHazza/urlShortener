import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginalUrl } from "./../../reducers/url";

class URLRedirect extends Component {
  componentDidMount() {
    const shortCode = this.props.match.params.urlCode;
    this.props.getOriginalUrl && this.props.getOriginalUrl(shortCode);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url.originalUrl !== this.props.url.originalUrl) {
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
