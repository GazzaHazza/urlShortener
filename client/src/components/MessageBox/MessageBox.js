import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styleVariables from "../../styles/styleVariables";

const Message = styled.div`
  padding: 10px;
  border: 1px solid #ffffff;
  background: ${props =>
    props.hasError
      ? styleVariables.colors.red.light
      : styleVariables.colors.green.light};};
  border-color: ${props =>
    props.hasError
      ? styleVariables.colors.red.normal
      : styleVariables.colors.green.normal};
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
`;
const Link = styled.a`margin-left: 5px;`;
class MessageBox extends Component {
  render() {
    const { message, shortUrl, hasAdded, hasError } = this.props;
    return (
      <Message hasError={hasError} hasAdded={hasAdded}>
        {message}
        <Link href={shortUrl} target="_blank">
          {shortUrl}
        </Link>
      </Message>
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
