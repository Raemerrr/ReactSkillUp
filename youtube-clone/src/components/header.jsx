import React, { memo } from "react";
import "../styles/header.css";

const Header = memo(() => {
  return (
    <div className="header">
      <div className="logo">
        <i className="fab fa-youtube"></i>
        <label className="header-label">램Tube</label>
      </div>
      <div className="search">
        <input className="header-input" placeholder="search.." />
        <button className="header-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="info">😜✨</div>
    </div>
  );
});

export default Header;
