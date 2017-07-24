import React, { Component } from "react";
class Message extends Component {
  render() {
    const { message, error, added, shortUrl } = this.props;
    const className = error ? "--error" : "--added";
    return (
      <div className={`message ${className}`}>
        {message}
        <a
          href={shortUrl}
          target="_blank"
          className={`message__link${className}`}
        >
          {shortUrl}
        </a>
      </div>
    );
  }
}
export default Message;
