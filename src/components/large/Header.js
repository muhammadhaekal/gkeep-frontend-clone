import React from "react";

const Header = props => {
  return (
    <div className="Header">
      {/* left side header */}
      <div className="left-side-header">
        <img src="/icons/navbar-toggle.svg" alt="toggle" />
        <span className="brand-name">Google Keep</span>
        <div className="search-input-group">
          <img src="/icons/search.svg" alt="search" />
          <input type="text" name="search" />
        </div>
      </div>

      {/* right side header */}
      <div className="right-side-header">
        <img src="/icons/refresh.svg" alt="refresh" />
        <img src="/icons/gapps.svg" alt="gapps" />
        <img src="/icons/notif.svg" alt="notif" />
        <img src="/icons/notif.svg" alt="notif" />
      </div>
    </div>
  );
};

export default Header;
