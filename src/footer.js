import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const styleFooter = {
      height: `80px`,
      backgroundColor: `#ffffcc`
    }

    return <footer style={styleFooter}>Sou o footers {this.props.description}</footer>;
  }
}
