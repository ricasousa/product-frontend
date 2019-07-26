import React from 'react';
import './assets/header.css';

const style = {
  color: '#cc0000',
  background: '#000',
  width: '100px',
  height: '30px',
  border: 'none',
  outline: 'none'
};

const _click = a => {
  console.log('_click!', a);
};

const _clickNoParams = () => {
  console.log('_clickNoParams!');
};

function Header() {
  return (
    <div className="header-container">
      Algum texto..
      <button style={style} onClick={() => _click('qualqeur coisa')}>
        Click Me!
      </button>

      <button style={style} onClick={() => _clickNoParams()}>
        Click Me 2!
      </button>
    </div>
  );
}

export default Header;
