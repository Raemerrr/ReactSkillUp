import React, { memo, useRef } from "react";
import "../styles/header.css";

const Header = memo(({onSearch}) => {
  const inputRef = useRef();
  const formRef = useRef();

  return (
    <div className="header">
      <div className="logo">
        <i className="fab fa-youtube"></i>
        <label className="header-label">램Tube</label>
      </div>
      <form ref={formRef} className="search" onSubmit={(e)=>{
        e.preventDefault();
        const search_text = inputRef.current.value;
        search_text && onSearch(search_text);
        formRef.current.reset();
      }}>
        <input ref={inputRef} className="header-input" placeholder="검색" />
        <button className="header-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="info">😜✨</div>
    </div>
  );
});

export default Header;
