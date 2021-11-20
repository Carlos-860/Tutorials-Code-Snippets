// 20.
// Props & Styling Practice
// function Joke(props) {
//   return (
//     <div>
//       <h3 style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question}</h3>
//       <h3 style={{ color: !props.question && '#888888' }}>Answer: {props.punchLine}</h3>
//       <br />
//     </div>
//   );
// }
//
// export default Joke;
// !props.question && '#888888'
// if the {props.question} is not set then style those components with the gray color

// 21.
// Mapping Components

// 21.1
// Mapping components with props as key pair values
// function Joke(props) {
//   return (
//     <div>
//       <h3 style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question}</h3>
//       <h3 style={{ color: !props.question && '#888888' }}>Answer: {props.punchLine}</h3>
//       <br />
//     </div>
//   );
// }
//
// export default Joke;

// 21.2
// Mapping components with props as an object
// function Joke(props) {
//   const { question, punchLine } = props.JokeData;
//   return (
//     <div>
//       <h3 style={{ display: question ? 'block' : 'none' }}>Question: {question}</h3>
//       <h3 style={{ color: !question && '#888888' }}>Answer: {punchLine}</h3>
//       <br />
//     </div>
//   );
// }
//
// export default Joke;

// 21.3
// Challenge with the filter function
// function Joke(props) {
//   const { question, punchLine } = props;
//   return (
//     <div>
//       <h3 style={{ display: question ? 'block' : 'none' }}>Question: {question}</h3>
//       <h3 style={{ color: !question && '#888888' }}>Answer: {punchLine}</h3>
//       <br />
//     </div>
//   );
// }
//
// export default Joke;

// 22.
// Mapping Components Practice
