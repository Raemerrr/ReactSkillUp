import React, { memo, useRef } from "react";
import "../styles/header.css";

const Header = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const search_text = inputRef.current.value;
    search_text && onSearch(search_text);
  };

  const handleButtonClick = (e) => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <i className="fab fa-youtube"></i>
        <label className="header-label">램Tube</label>
      </div>
      <div className="search">
        <input
          ref={inputRef}
          className="header-input"
          placeholder="검색"
          onKeyPress={handleKeyPress}
        />
        <button className="header-button" onClick={handleButtonClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="info">😜✨</div>
    </div>
  );
});

export default Header;
