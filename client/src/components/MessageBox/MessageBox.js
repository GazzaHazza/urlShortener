import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageBox.css";
class MessageBox extends Component {
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

MessageBox.propTypes = {
  hasError: PropTypes.bool,
  hasAdded: PropTypes.bool,
  shortUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
MessageBox.defaultProps = {
  hasError: false,
  hasAdded: false
};
export default MessageBox;
