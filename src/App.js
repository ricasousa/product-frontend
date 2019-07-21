import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="minha-classe">
          React Playground Project...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer description='Que lindo...' />
    </div>
  );
}

export default App;
