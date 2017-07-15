import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <main id="random-word-genereator">
        {this.props.children}
      </main>
    );
  }
}
