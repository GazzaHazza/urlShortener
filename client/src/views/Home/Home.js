import React, { Component } from "react";
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
      url: { message, error, hasAdded, shortUrl, orginalUrl, isBusy }
    } = this.props;
    const messageComp =
      message && (hasAdded || error)
        ? <FadeIn>
            <Message
              message={message}
              error={error}
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
