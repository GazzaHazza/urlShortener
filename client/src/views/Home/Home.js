import React, { Component } from "react";
import { connect } from "react-redux";
import { sendNewUrl } from "./../../reducers/url";
import UrlForm from "../../components/UrlForm/UrlForm";
import Message from "../../components/Message/Message";

class Home extends Component {
  generateNewUrl = url => {
    this.props.sendNewUrl && this.props.sendNewUrl(url);
  };
  render() {
    const { url: { message, error, added, shortUrl, orginalUrl } } = this.props;
    const messageComp =
      message && (added || error)
        ? <Message
            message={message}
            error={error}
            added={added}
            shortUrl={shortUrl}
            orginalUrl={orginalUrl}
          />
        : null;
    return (
      <div className="home">
        <div className="home__container">
          <UrlForm onClickGenerate={this.generateNewUrl} />
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
