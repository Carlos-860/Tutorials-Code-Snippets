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
import React from 'react';
import Header from './components/Header';
import MainContent from './components/Footer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
