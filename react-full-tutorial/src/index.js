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

// 7.
// Functional Components Practice
// import React from 'react';
// import ReactDOM from 'react-dom';
// function MyInfo() {
//   return (
//     <>
//       <h1 style={{ color: 'blue' }}>Your Name</h1>
//       <p style={paragraphStyles}>Little blurb about yourself</p>
//       <ol>
//         <li>Vacation Spot 1</li>
//         <li>Vacation Spot 2</li>
//         <li>Vacation Spot 3</li>
//       </ol>
//     </>
//   );
// }
// // styled components
// const paragraphStyles = {
//   color: 'red',
// };
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// 8.
// Move Components into seperate files
// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyInfo from './components/MyInfo.js';
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// 9.
// Parent/Child components
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// 10.
// Practice Parent/Child components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
