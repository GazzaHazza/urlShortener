import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";
import { sendNewUrl } from "./../../reducers/url";
import UrlForm from "../../components/UrlForm/UrlForm";
import MessageBox from "../../components/MessageBox/MessageBox";
import Loading from "../../components/Loading/Loading";
import "./Home.css";

export class Home extends Component {
  generateNewUrl = url => {
    this.props.sendNewUrl && this.props.sendNewUrl(url);
  };
  render() {
    const {
      url: { message, hasError, hasAdded, shortUrl, orginalUrl, isBusy }
    } = this.props;

    const messageComponent =
      message && (hasAdded || hasError)
        ? <FadeIn>
            <MessageBox
              message={message}
              hasError={hasError}
              hasAdded={hasAdded}
              shortUrl={shortUrl}
              orginalUrl={orginalUrl}
            />
          </FadeIn>
        : null;

    const loadingComponent = isBusy ? <Loading /> : null;
    return (
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Shorten your link....</h1>
          <h2 className="home__subtitle">
            Enter a url below, click generate and then use the "short" version.
          </h2>
          <UrlForm onClickGenerate={this.generateNewUrl} isBusy={isBusy} />
          {messageComponent}
          {loadingComponent}
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
