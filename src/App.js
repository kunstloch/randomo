import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <ColorGenerator />
    </>
  );
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

function Header() {
  //

  const [status, setStatus] = useState(true);

  return (
    <header>
      <h1>RANDOMO - THE Color Generator</h1>
      <button onClick={() => setStatus(false)}>What?</button>
      <button onClick={() => setStatus(true)}>X</button>
      <p hidden={status}>Bla bla bla balalala</p>
    </header>
  );
}

function ColorGenerator() {
  const [color, setColor] = useState('#ffffff');
  const [myhue, setHue] = useState('random');
  let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: color
  };

  return (
    <>
      <button
        onClick={() => {
          let randomColor = require('randomcolor');
          setColor(
            randomColor({
              luminosity: 'light',
              hue: myhue
            })
          );
        }}
      >
        KLICKEN UND STAUNEN
      </button>

      <h2>COLOR = {color}</h2>
      <div className="yellow-box" style={styles}></div>

      <select
        name="color"
        value={myhue}
        onChange={event => setHue(event.target.value)}
      >
        <option value="random">Random</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </>
  );
}

export default App;
