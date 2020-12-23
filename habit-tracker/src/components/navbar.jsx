import React from 'react';
import '../styles/navbar.css';
const Navbar = (props) =>{
    return (
      <nav className='navbar'>
        <span>logo</span>
        <span>Habit Tracker</span>
        <span className="navbar-count">{props.count}</span>
      </nav>
    );
}

export default Navbar;