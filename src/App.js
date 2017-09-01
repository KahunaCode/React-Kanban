/* jshint esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderTitle from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTitle
          title="Kanban"
        />
      </div>
    );
  }
}

export default App;
