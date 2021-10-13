// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 6.
// Functional  Components
// function MyApp() {
//   return (
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//   );
// }

// ReactDOM.render(<MyApp />, document.getElementById('root'));

// 5.
// React DOM & JSX Practice
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>,
//   document.getElementById('root')
// );

// 7.
// Functional Components Practice
import React from 'react';
import ReactDOM from 'react-dom';

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

// styled components
const paragraphStyles = {
  color: 'red',
};

ReactDOM.render(<MyInfo />, document.getElementById('root'));
