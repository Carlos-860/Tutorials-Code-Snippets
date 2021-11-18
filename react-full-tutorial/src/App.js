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
import ContactCard from './components/ContactCard';

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
function App() {
  return (
    <div>
      <ContactCard contact={{ img: 'http://placekitten.com/400/400', name: 'Mr Whiskerperson', phone: '(212) 555 1234', email: 'mr.whiskaz@catnap.meow' }} />
      <ContactCard contact={{ img: 'http://placekitten.com/400/200', name: 'Fluffykins', phone: '(212) 555 2345', email: 'fluff@me.com' }} />
      <ContactCard contact={{ img: 'http://placekitten.com/400/350', name: 'Destroyer', phone: '(212) 555 3456', email: 'ofworlds@yahoo.com' }} />
      <ContactCard contact={{ img: 'http://placekitten.com/400/300', name: 'Felix', phone: '(212) 555 4567', email: 'thecat@hotmail.com' }} />
    </div>
  );
}
export default App;
