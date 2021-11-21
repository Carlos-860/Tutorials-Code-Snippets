import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './style.css';

// 5.
// React DOM & JSX Practice
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
//
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// 8.
// Move Components into seperate files
// import MyInfo from './components/MyInfo.js';
//
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// 9.
// Parent/Child components
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// 10.
// Practice Parent/Child components
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// 12.
// Styling React with CSS classes
// import App from './App';
// import './style.css';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// 14.
// JSX to JavaScript and Back
// function App() {
//   const firstName = 'Bob',
//     lastName = 'Ziroll';
//   return <h1>Hello {`${firstName} ${lastName}`}!</h1>;
//
//   const date = new Date();
//   return (
//     <h1>
//       Good
//       {(date.getHours() >= 0) & (date.getHours() < 12) ? ' Morning' : date.getHours() < 17 ? ' Afternoon' : ' Evening'}
//     </h1>
//   );
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// 15.
// Inline Styles with the style property
// function App() {
//   const date = new Date(2021, 10, 16, 16);
//   let timeOfDay;
//
//   const styles = {
//     fontSize: 28,
//   };
//
//   if (date.getHours() >= 0 && date.getHours() < 12) {
//     timeOfDay = 'Morning';
//     styles.color = 'green';
//   } else if (date.getHours() <= 17) {
//     timeOfDay = 'Afternoon';
//     styles.color = 'yellow';
//   } else {
//     timeOfDay = 'Evening';
//     styles.color = 'black';
//   }
//
//   return <h1 style={styles}>Good {timeOfDay}</h1>;
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// 19.
// Props in React
// ReactDOM.render(<App />, document.getElementById('root'));

// 25.
// Class-based Components Practice
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="vschool" />
//         <Greeting />
//       </div>
//     );
//   }
// }
//
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     );
//   }
// }
//
// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//
//     if (hours < 12) {
//       timeOfDay = 'morning';
//     } else if (hours < 17) {
//       timeOfDay = 'afternoon';
//     } else {
//       timeOfDay = 'night';
//     }
//
//     return (
//       <div>
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//       </div>
//     );
//   }
// }
//
// export default App;
//
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
