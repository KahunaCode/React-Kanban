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
    const cards = [
      { title: "Make Better styles",
        priority: "medium",
        status: "not done",
        createdBy: "james",
        assignedTo: "notJames"
      },
      { title: "Make More styles",
        priority: "low",
        status: "not done",
        createdBy: "james",
        assignedTo: "otherJames"
      }
    ]

    return (
      <div className="App">

        <HeaderTitle
          title="Kanban"
        />

        <ul>
          { cards.map(card => <Card title={card.title} priority={card.priority} status={card.status} createdBy={card.createdBy} assignedTo={card.assignedTo} />) }
        </ul>

      </div>
    );
  }
}

export default App;
