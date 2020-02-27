import React from 'react';

// Components
import Header from './components/header/header'
import Main from './pages/main';

//Styles
import './reset.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
