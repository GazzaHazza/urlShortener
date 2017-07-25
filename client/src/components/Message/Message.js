import React, { Component } from "react";
import "./Message.css";
class Message extends Component {
  render() {
    const { message, error, hasAdded, shortUrl } = this.props;
    const className = error && !hasAdded ? "--error" : "--added";
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
export default Message;
