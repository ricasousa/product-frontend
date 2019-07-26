import React, { Component } from 'react';

const list = [];

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list
    };
  }
  render() {
    const styleFooter = {
      height: `80px`,
      backgroundColor: `#ffffcc`
    };

    return <footer style={styleFooter}>Sou o footers {this.props.description}</footer>;
  }
}
