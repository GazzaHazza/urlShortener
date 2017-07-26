import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";
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
      <div className="url-redirect__container">
        <Loading />
      </div>
    );
  }
}
URLRedirect.propTypes = {
  url: PropTypes.shape({
    hasError: PropTypes.bool,
    hasAdded: PropTypes.bool,
    isBusy: PropTypes.bool,
    shortUrl: PropTypes.string.isRequired,
    orginalUrl: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })
};
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
