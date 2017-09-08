/* jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCards } from './actions/cardActions.js';
import './App.css';
import HeaderTitle from './components/header';
import NewCard from './components/addCard';
import Column from './components/column';

class App extends Component {
  componentWillMount() {
    this.props.loadCards();
  }

  render() {
    console.log(this.props.cards);
    return (
      <div>
        <h1>Kanban</h1>
        <Column
        id = "queue"
        title = "Queue"
        cards = { this.props.cards.filter(card => card.status === "queue") }
        />

        <Column
        id = "progress"
        title = "Progress"
        cards = { this.props.cards.filter(card => card.status === "progress") }
        />

        <Column
        id = "done"
        title = "Done"
        cards = { this.props.cards.filter(card => card.status === "done") }
        />

      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadCards: () =>{
      dispatch(loadCards())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
