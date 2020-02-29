import React from 'react';

// Components
import Header from './components/header/header'
import Routes from './routes';

//Styles
import './reset.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
