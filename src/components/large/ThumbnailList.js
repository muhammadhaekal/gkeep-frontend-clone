import React, { Component } from "react";
import Thumbnail from "../small/Thumbnail";
import { Modal } from "reactstrap";

class ThumbnailList extends Component {
  constructor() {
    super();
    this.state = {
      modal: true
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="thumbnail-list">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
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
        </Modal>
      </div>
    );
  }
}

export default ThumbnailList;
