import React, { Component } from "react";
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
export default UrlForm;
