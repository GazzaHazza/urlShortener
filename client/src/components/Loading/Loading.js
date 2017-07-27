import React, { Component } from "react";
import styled from "styled-components";
const LoadingContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background: rgba(234, 234, 234, .8);
  left: calc(50% - 125px);
  top: calc(50% - 75px);
`;
const LoadingIcon = styled.i`
  font-size: 100px;
  text-align: center;
  display: block;
  margin-top: 74px;
`;

class Loading extends Component {
  render() {
    return (
      <LoadingContainer className="loading">
        <LoadingIcon className="fa fa-spinner fa-pulse" />
      </LoadingContainer>
    );
  }
}
export default Loading;
