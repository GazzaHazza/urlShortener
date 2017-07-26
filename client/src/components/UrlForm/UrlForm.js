import React, { Component } from "react";
import PropTypes from "prop-types";
import "./URLForm.css";
class UrlForm extends Component {
  handleOnClick = () => {
    this.props.onClickGenerate(this.refs.urlInput.value);
  };
  render() {
    const { isBusy } = this.props;
    const buttonContent = isBusy ? "Generating..." : "Generate URL";
    return (
      <div className="url-form">
        <div className="url-form__container">
          <input type="text" className="url-form__input" ref="urlInput" />
          <button className="url-form__button" onClick={this.handleOnClick}>
            {buttonContent}
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
