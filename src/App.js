/* jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCards } from './actions/cardActions.js';
import './App.css';
import HeaderTitle from './components/header';
import Card from './components/card';
import NewCard from './components/addCard';

class App extends Component {
  componentWillMount() {
    this.props.loadCards();
  }



  render() {
    console.log(this.props.cards);
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          { this.props.cards.map(card => <Card title={card.title} priority={card.priority} status={card.status} createdBy={card.createdBy} assignedTo={card.assignedTo} />) }
        </ul>
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
