import React from 'react';

function Meme() {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <form style={{ display: 'grid', gridTemplate: '40px 40px / 1fr 1fr', gap: '17px', width: '550px', margin: '2rem auto' }}>
      <input type="text" style={{ borderRadius: '5px', border: '1px solid #D5D4D8', textIndent: '5px' }} placeholder="Top Text" />
      <input type="text" style={{ borderRadius: '5px', border: '1px solid #D5D4D8', textIndent: '5px' }} placeholder="Bottom Text" />
      <button
        type="button"
        style={{ gridColumn: '1 / -1', borderRadius: '5px', background: 'linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={handleClick}
      >
        Get a new meme image 🖼
      </button>
    </form>
  );
}

export default Meme;
