import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boton  from './components/Boton';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Titulo></Titulo>
        <Boton></Boton>
      </header>
    </div>
  );
}

export default App;
