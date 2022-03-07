import React from 'react';
import '../style.css';

function Main() {
  return (
    <main>
      <h1 className="main--title">Fun Facts about React</h1>

      <ul className="main--facts">
        <li>Was first released in 2015</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobiloe apps</li>
      </ul>
    </main>
  );
}

export default Main;
