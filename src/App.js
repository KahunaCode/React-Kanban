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
    return (
      <h1>Hello</h1>
    );
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
  null,
  mapDispatchToProps
)(App)

export default ConnectedApp;
