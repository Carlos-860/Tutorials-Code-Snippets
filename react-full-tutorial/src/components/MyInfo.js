// 8.
// Move Components into seperate files
import react from 'react';

function MyInfo() {
  return (
    <>
      <h1 style={{ color: 'blue' }}>Your Name</h1>
      <p style={paragraphStyles}>Little blurb about yourself</p>
      <ol>
        <li>Vacation Spot 1</li>
        <li>Vacation Spot 2</li>
        <li>Vacation Spot 3</li>
      </ol>
    </>
  );
}

export default MyInfo;
