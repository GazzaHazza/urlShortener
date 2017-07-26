import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UrlForm.css";
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
      <div className="url-form">
        <div className="url-form__container">
          <input
            type="text"
            className="url-form__input"
            value={this.state.urlValue}
            onChange={this.handleInputChange}
          />
          <button className="url-form__button" onClick={this.handleOnClick}>
            {buttonText}
          </button>
        </div>
      </div>
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
