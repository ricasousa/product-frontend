import React from 'react';

const style = {
  color: '#cc0000'
}

const name = 'Josh Perez';
const element = <h1 style={style}>Hello, {name}</h1>;

function Header() {
  return element;
}

export default Header;
