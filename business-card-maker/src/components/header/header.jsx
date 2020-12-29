import React, { memo } from "react";
import "./header.css";

const Header = memo(() => {
  return (
    <section className="header">
      <div className="logo">
        <i className="fas fa-address-card"></i>
      </div>
      <div className="title">
        <p>Business Card Maker</p>
      </div>
    </section>
  );
});

export default Header;
