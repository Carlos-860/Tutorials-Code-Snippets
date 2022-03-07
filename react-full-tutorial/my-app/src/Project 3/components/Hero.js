import React from 'react';
import HeroImage from '../assets/photo-grid.png';

function Hero() {
  return (
    <div style={{ maxWidth: '1024px', margin: 'auto', textAlign: 'center', padding: '2rem' }} className="hero">
      <img src={HeroImage} alt="Hero Grid" style={HeroImg} className="hero--photo" />

      <h1 style={{ color: '#000', fontSize: '36px', fontWeight: 'semibold', textAlign: 'left', marginBottom: '16px' }} className="hero--header">
        Online Experiences
      </h1>

      <p style={{ color: '#222', fontSize: '16px', fontWeight: 'light', textAlign: 'left' }} className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home
      </p>
    </div>
  );
}

export default Hero;

const HeroImg = {
  width: '100%',
  maxWidth: '500px',
};
