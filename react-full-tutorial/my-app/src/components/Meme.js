import React, { useState } from 'react';
import memesData from '../memesData';

function Meme() {
  // State
  const [meme, setMeme] = useState({
    topText: 'Shut up',
    bottomText: 'and take my money!',
    randomImage: 'https://i.imgflip.com/1jwhww.jpg',
  });

  const [allMemeImages] = useState(memesData);

  // Event Handlers
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevState) => {
      return {
        randomImage: url,
        topText: document.querySelector('#topText').value,
        bottomText: document.querySelector('#bottomText').value,
      };
    });

    console.log(meme);
  };

  const changeMemeText = () => {
    setMeme((prevState) => {
      return {
        ...prevState,
        topText: document.querySelector('#topText').value,
        bottomText: document.querySelector('#bottomText').value,
      };
    });
  };

  return (
    <form style={memeForm}>
      <input type="text" style={{ borderRadius: '5px', border: '1px solid #D5D4D8', textIndent: '5px' }} id="topText" onChange={changeMemeText} />
      <input type="text" style={{ borderRadius: '5px', border: '1px solid #D5D4D8', textIndent: '5px' }} id="bottomText" onChange={changeMemeText} />
      <button
        type="button"
        style={{ gridColumn: '1 / -1', borderRadius: '5px', background: 'linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </button>

      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h2 style={{ position: 'absolute', top: '0', left: '0', right: '0', textAlign: 'center', color: '#fff' }}>{meme.topText}</h2>

        <img src={meme.randomImage} alt="Meme" style={{ width: '100%', maxHeight: '360px', gridColumn: '1 / span 2', objectFit: 'cover' }} />

        <h2 style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center', color: '#fff' }}>{meme.bottomText}</h2>
      </div>
    </form>
  );
}

export default Meme;

const memeForm = {
  display: 'grid',
  gridTemplate: '40px 40px / 1fr 1fr',
  gap: '17px',
  width: '550px',
  margin: '2rem auto',
};
