import React, { Component } from "react";

class InputNote extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="component-container">
        <div className="input-form">
          <div className="input-title">
            <input
              type="text"
              name="title"
              className="remove-outline-border width-100"
              placeholder="Title"
            />
            <img src="/icons/pin.svg" alt="svg" />
          </div>
          <textarea
            name="description"
            id="description"
            placeholder="description"
            className="remove-outline-border width-100 input-description"
          />
          <div className="thumbnail-menu">
            <img src="/icons/color.svg" alt="color" />
            <img src="/icons/archive.svg" alt="archive" />
            <img src="/icons/trash.svg" alt="trash" />
          </div>
        </div>
      </div>
    );
  }
}

export default InputNote;
