import React, { Component } from 'react';
import './App.css';
import SimpleContainer from './container/container'
import DenseAppBar from './appbar/bar';

class App extends Component {
  render () {
    return (
      <div>
        <DenseAppBar/>
        <SimpleContainer/>
      </div>
    );
  }
}

export default App;
