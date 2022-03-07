import React from 'react';

function header() {
  return (
    <div>
      <div style={{ height: '55px', background: '#f55a5a', maxWidth: '471px', margin: '2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={`./assets/globe.png`} alt="Globe Icon" />
        <span style={{ marginLeft: '0.5rem', color: '#fff', fontSize: '14px' }}>my travel journal.</span>
      </div>
    </div>
  );
}

export default header;
