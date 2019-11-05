import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
    const submitForm = (event) => {
      console.log('123', {event});
      return false;
    };

    return (
      <form onSubmit={(event) => submitForm(event)}>
        <input type="text"></input>
        <button type="submit">OK</button>
      </form>
    );
  }
}
