import React from 'react';
import AirbnbLogo from '../assets/airbnb-logo.png';

function Navbar() {
  return (
    <nav style={nav}>
      <img src={AirbnbLogo} alt="Airbnb Logo" style={logoImg} />
    </nav>
  );
}

export default Navbar;

const nav = {
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  padding: '20px 36px',
  boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
};
const logoImg = {
  maxWidth: '100px',
};
