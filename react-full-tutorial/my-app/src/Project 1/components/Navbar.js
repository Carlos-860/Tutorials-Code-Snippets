import React from 'react';
import ReactLogo from '../assets/react-icon-small.png';
import '../style.css';

function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} alt="React Logo" className="nav--icon" />

      <h3 className="nav--logo_text">React Facts</h3>

      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
