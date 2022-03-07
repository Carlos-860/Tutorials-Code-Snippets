import React from 'react';

function header() {
  return (
    <header
      style={{ background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)', height: '65px', width: '550px', margin: '2rem auto', display: 'flex', alignItems: 'center', paddingInline: '1rem' }}
    >
      <img src={`./assets/troll-face.png`} alt="Troll Face" style={{ padding: '', height: '26px', marginRight: '1rem' }} />
      <h2 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Meme Generator</h2>
      <h4 style={{ fontSize: '12px', marginLeft: 'auto', color: '#fff', fontWeight: '500' }}>React Course - Project 3</h4>
    </header>
  );
}

export default header;
