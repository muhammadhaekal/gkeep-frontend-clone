import React from "react";

const LeftNavbar = props => {
  return (
    <div className="left-navbar">
      <div className="left-navbar-menu">
        <img src="/icons/reminders.svg" alt="reminders" />
        <span>Reminders</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/notes.svg" alt="notes" />
        <span>Notes</span>
      </div>
      <hr />
      <div className="edit-label">
        <span>Label</span>
        <span>Edit</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/label.svg" alt="label" />
        <span>Create New Label</span>
      </div>
      <hr />
      <div className="left-navbar-menu">
        <img src="/icons/archive.svg" alt="archive" />
        <span>Archive</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/trash.svg" alt="trash" />
        <span>Bin</span>
      </div>

      <hr />
      <div className="left-navbar-menu">
        <img src="/icons/settings.svg" alt="settings" />
        <span>Settings</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/feedback.svg" alt="feedback" />
        <span>Send Feedback</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/help.svg" alt="help" />
        <span>Help</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/download.svg" alt="download" />
        <span>App Downloads</span>
      </div>
      <div className="left-navbar-menu">
        <img src="/icons/keyboard-shortcuts.svg" alt="keyboard" />
        <span>Keyboard Shortcut</span>
      </div>
    </div>
  );
};

export default LeftNavbar;
