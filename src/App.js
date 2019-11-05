import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import LoginImage from './feature/login/components/login-image/login-image';
import LoginForm from './feature/login/components/form/form';

function App() {
  return (
    <div className="app">
      <div className="login-image">
        <LoginImage />
        <Header />
      </div>
      <div className="login-form">
        <LoginForm />
        <Footer description="Que lindo..." />
      </div>
    </div>
  );
}

export default App;
