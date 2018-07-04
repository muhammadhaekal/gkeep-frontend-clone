import React from "react";

const Thumbnail = props => {
  return (
    <div className="thumbnail">
      <div className="thumbnail-title">
        <span className="width-100">Title</span>
        <img src="/icons/pin.svg" alt="pin" />
      </div>
      <p>paragraph</p>
      <div className="thumbnail-menu">
        <img src="/icons/color.svg" alt="color" />
        <img src="/icons/archive.svg" alt="archive" />
        <img src="/icons/trash.svg" alt="trash" />
      </div>
    </div>
  );
};

export default Thumbnail;
