// 9.
// Parent/Child components
// import React from 'react';
// import Footer from './Footer';

// function App() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>Thing 1</li>
//           <li>Thing 2</li>
//           <li>Thing 3</li>
//         </ul>
//       </nav>

//       <main>
//         <p>This is wwhere most of my content will go...</p>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// 10.
// Practice Parent/Child components
// import React from 'react';
// import Header from './components/Header';
// import MainContent from './components/Footer';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }

// export default App;

//19.
// Props in React
// import ContactCard from './components/ContactCard';

// 19.1 props and corresponding key pair values
// function App() {
//   return (
//     <div className="contacts">
//       <ContactCard img="http://placekitten.com/400/400" name="Mr Whiskerperson" phone="(212) 555 1234" email="mr.whiskaz@catnap.meow" />
//       <ContactCard img="http://placekitten.com/400/200" name="Fluffykins" phone="(212) 555 2345" email="fluff@me.com" />
//       <ContactCard img="http://placekitten.com/400/350" name="Destroyer" phone="(212) 555 3456" email="ofworlds@yahoo.com" />
//       <ContactCard img="http://placekitten.com/400/300" name="Felix" phone="(212) 555 4567" email="thecat@hotmail.com" />
//     </div>
//   );
// }
// export default App;

// 19.2 props as a object properties
// function App() {
//   return (
//     <div>
//       <ContactCard contact={{ img: 'http://placekitten.com/400/400', name: 'Mr Whiskerperson', phone: '(212) 555 1234', email: 'mr.whiskaz@catnap.meow' }} />
//       <ContactCard contact={{ img: 'http://placekitten.com/400/200', name: 'Fluffykins', phone: '(212) 555 2345', email: 'fluff@me.com' }} />
//       <ContactCard contact={{ img: 'http://placekitten.com/400/350', name: 'Destroyer', phone: '(212) 555 3456', email: 'ofworlds@yahoo.com' }} />
//       <ContactCard contact={{ img: 'http://placekitten.com/400/300', name: 'Felix', phone: '(212) 555 4567', email: 'thecat@hotmail.com' }} />
//     </div>
//   );
// }
// export default App;

// 19.3 props from a json object
/* const contactCard = [
  {
    id: 1,
    img: 'http://placekitten.com/400/400',
    name: 'Mr Whiskerperson',
    phone: '(212) 55 1234',
    email: 'mr.whikaz@catnap.meow',
  },
  {
    id: 2,
    img: 'http://placekitten.com/400/200',
    name: 'Fluffykins',
    phone: '(212) 55 2345',
    email: 'fluff@me.com',
  },
  {
    id: 3,
    img: 'http://placekitten.com/400/350',
    name: 'Destroyer',
    phone: '(212) 55 3456',
    email: 'ofworlds@yahoo.com',
  },
  {
    id: 4,
    img: 'http://placekitten.com/400/300',
    name: 'Felix',
    phone: '(212) 555 4567',
    email: 'thecat@hotmail.com',
  },
];

function App() {
  return (
    <div>
      {contactCard.map((individualContact) => (
        <ContactCard key={individualContact.id} contact={individualContact} />
      ))}
    </div>
  );
}
export default App; 

*/

// 20.
// Props & Styling Practice
// import Joke from './components/Joke';
// function App() {
//   return (
//     <>
//       <Joke punchLine="Its hard to explain jokes to kleptomaniacs because they always take things literally." />
//       <Joke question="What's the best thing about Switzerland?" punchLine="I don't know, but the flag is a big plus" />
//       <Joke question="Did you hear about the mathematician who's afraid of negative numbers?" punchLine="He'll stop at nothing to avoid them." />
//       <Joke question="Hear about the new restuarant called Karma?" punchLine="There's no menu: you get what you deserve." />
//       <Joke question="Did you hear about the actor who fell through the floorboards?" punchLine="He was just going through a stage." />
//       <Joke question="Did you hear about the claustrophbic astronaut?" punchLine="He just needed a little space." />
//     </>
//   );
// }
//
// export default App;

// 21.
// Mapping Components
// import Joke from './components/Joke';
// import JokesData from './JokesData';

// 21.1
// Mapping components with props as key pair values
// function App() {
//    const JokesComponent = JokesData.map((e) => <Joke key={e.id} question={e.question} punchLine={e.punchLine} /> )
//
//    return (
//      <div>
//        {JokesComponent}
//      </div>
//    );
// }
//
// export default App;

// 21.2
// Mapping components with props as an object
// function App() {
//   return (
//     <>
//       {JokesData.map((e) => (
//         <Joke key={e.id} JokeData={{ question: e.question, punchLine: e.punchLine }} />
//       ))}
//     </>
//   );
// }
//
// export default App;

// 21.3
// Challenge with the filter function
// function App() {
//   const JokesComponent = JokesData.filter((e) => e.question !== undefined).map((e) => <Joke key={e.id} question={e.question} punchLine={e.punchLine} />);
//
//   return <div>{JokesComponent}</div>;
// }
//
// export default App;
//
// !NB - Chain map function on to filter function

// 22.
// Mapping Components Practice
//import ProductsData from './vschoolProducts';
//import Product from './components/Product';
//
// function App() {
//   const productComponents = ProductsData.map((item) => <Product key={item.id} product={item} />);
//
//   return <div className="product-card-grid">{productComponents}</div>;
// }
//
// export default App;

// 24.
// Class-based Components
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return <div>Code goes here!</div>;
//   }
// }

// export default App;

// 26.
// State
// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: 'Yes',
//     };
//   }

//   render() {
//     return <div>Is state important to know? {this.state.answer}</div>;
//   }
// }

// export default App;

// 27.
// State Practice
// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: 'Bob',
//       age: 27,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age} years old</h1>
//       </div>
//     );
//   }
// }

// export default App;

// 28.
// State Practice 2
// import React, { Component } from 'react';
//
// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
//       </div>
//     );
//   }
// }
//
// export default App;

// 30.
// Handling Events in React
// import React, { Component } from 'react';
//
// class App extends Component {
//   render() {
//     function handleClick() {
//       console.log('Clicked');
//     }
//
//     function handleMouseOver() {
//       console.log('Hovered');
//     }
//
//     return (
//       <div>
//         <img src="https://www.fillmurray.com/200/100" onMouseOver={handleMouseOver} />
//         <br />
//         <br />
//         <button type="button" onClick={handleClick}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }
//
// export default App;

// 32.
// Changing State
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    // When ever you use a class method (eg. handleClick method) make sure to bind it
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App;
