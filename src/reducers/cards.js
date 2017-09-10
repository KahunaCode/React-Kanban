/* jshint esversion: 6 */

import { LOAD_CARDS, ADD_CARD } from '../actions/cardActions.js';
import { MOVE_LEFT } from '../actions/moveLeft.js';
import { MOVE_RIGHT } from '../actions/moveRight.js';

const initialState = [];

const cards = (state=initialState, action) =>{
  switch (action.type){
    case LOAD_CARDS:
    console.log("action cards", action);
      return action.cards;
    case MOVE_LEFT:
      const cards = state.filter(card => parseInt(card.id) !== parseInt(action.card.id));
      console.log("cards is", cards);
      console.log('action card', action.card);
      return [...cards, action.card];
    case MOVE_RIGHT:
      const cardsR = state.filter(card => parseInt(card.id) !== parseInt(action.card.id));
      return [...cardsR, action.card];
    case ADD_CARD:
      console.log("add card state",state);
      return [...state];
    default:
      return state;
  }
};

export default cards;