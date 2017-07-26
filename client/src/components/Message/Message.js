import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Message.css";
class Message extends Component {
  render() {
    const { message, hasError, hasAdded, shortUrl } = this.props;
    const className = hasError && !hasAdded ? "--error" : "--added";
    return (
      <div className={`message message${className}`}>
        {message}
        <a
          href={shortUrl}
          target="_blank"
          className={`message__link message__link${className}`}
        >
          {shortUrl}
        </a>
      </div>
    );
  }
}

Message.propTypes = {
  hasError: PropTypes.bool,
  hasAdded: PropTypes.bool,
  shortUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
Message.defaultProps = {
  hasError: false,
  hasAdded: false
};
export default Message;
