import React from 'react';

function Sectiondivider({ section }) {
  return (
    <div style={{ minHeight: '100vh', background: 'skyblue', display: 'grid', placeItems: 'center' }}>
      <h1>Project {section}</h1>
    </div>
  );
}

export default Sectiondivider;
