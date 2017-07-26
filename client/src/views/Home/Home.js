import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";
import { sendNewUrl } from "./../../reducers/url";
import UrlForm from "../../components/UrlForm/UrlForm";
import Message from "../../components/Message/Message";
import "./Home.css";

class Home extends Component {
  generateNewUrl = url => {
    this.props.sendNewUrl && this.props.sendNewUrl(url);
  };
  render() {
    const {
      url: { message, hasError, hasAdded, shortUrl, orginalUrl, isBusy }
    } = this.props;
    const messageComp =
      message && (hasAdded || hasError)
        ? <FadeIn>
            <Message
              message={message}
              hasError={hasError}
              hasAdded={hasAdded}
              shortUrl={shortUrl}
              orginalUrl={orginalUrl}
            />
          </FadeIn>
        : null;
    return (
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Url shortener....</h1>
          <h2 className="home__subtitle">
            Enter url below and use "short" version.
          </h2>
          <UrlForm onClickGenerate={this.generateNewUrl} isBusy={isBusy} />
          {messageComp}
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  url: PropTypes.shape({
    hasError: PropTypes.bool,
    hasAdded: PropTypes.bool,
    isBusy: PropTypes.bool,
    shortUrl: PropTypes.string,
    orginalUrl: PropTypes.string,
    message: PropTypes.string
  })
};
export default connect(
  state => {
    return {
      url: state.url
    };
  },
  {
    sendNewUrl
  }
)(Home);
