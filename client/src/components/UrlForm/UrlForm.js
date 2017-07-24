import React, { Component } from "react";
import "./URLForm.css";
class UrlForm extends Component {
  handleOnClick = () => {
    this.props.onClickGenerate(this.refs.urlInput.value);
  };
  render() {
    return (
      <div className="url-form">
        <div className="url-form__container">
          <input type="text" className="url-form__input" ref="urlInput" />
          <button className="url-form__button" onClick={this.handleOnClick}>
            Generate URL
          </button>
        </div>
      </div>
    );
  }
}
export default UrlForm;
