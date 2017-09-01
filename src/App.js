/* jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';

import HeaderTitle from './components/header';
import Card from './components/card';

class App extends Component {

  componentWillMount() {
    this.setState({
      cards: []
    });

    //function here to get cards from DB

  }


  render() {
    return (
      <div className="App">

        <HeaderTitle
          title="Kanban"
        />

        <Card
          title="Make Better Styles"
          priority="Medium"
          status="In Queue"
          createdBy="James"
          assignedTo="notJames"
        />

      </div>
    );
  }
}

export default App;
