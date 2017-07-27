import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styleVariables from "../../styles/styleVariables";

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Input = styled.input`
  flex: 2 0 0;
  border: 1px solid ${styleVariables.colors.black.light};
  outline: none;
  padding: 10px;
  border-radius: 5px;
  font-size: ${styleVariables.fonts.size.medium};
  line-height: ${styleVariables.fonts.size.medium};

  @media all and (max-width: 520px) {
    flex: auto;
    width: 100%;
  }
`;

const Button = styled.button`
  flex: 1 0 0;
  margin-left: 10px;
  outline: none;
  border: none;
  background: ${styleVariables.colors.orange.normal};
  font-size: ${styleVariables.fonts.size.medium};
  border-radius: 5px;
  border: 1px solid ${styleVariables.colors.orange.normal};
  &:active {
    border-style: insert;
    border-color: ${styleVariables.colors.orange.dark};
  }
  @media all and (max-width: 520px) {
    flex: auto;
    width: 100%;
    margin: 20px 0 0 0;
  }
`;
class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlValue: ""
    };
  }
  handleInputChange = e => {
    this.setState({ urlValue: e.target.value });
  };
  handleOnClick = () => {
    this.props.onClickGenerate(this.state.urlValue);
  };
  render() {
    const { isBusy } = this.props;
    const buttonText = isBusy ? "Generating..." : "Generate short link";
    return (
      <Container>
        <Input
          type="text"
          value={this.state.urlValue}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleOnClick}>
          {buttonText}
        </Button>
      </Container>
    );
  }
}
UrlForm.propTypes = {
  isBusy: PropTypes.bool,
  onClickGenerate: PropTypes.func
};
UrlForm.defaultProps = {
  isBusy: false
};
export default UrlForm;
