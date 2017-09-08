/* jshint esversion: 6 */

import { LOAD_CARDS } from '../actions/cardActions.js';
import { MOVE_LEFT } from '../actions/moveLeft.js';

const initialState = [];

const cards = (state=initialState, action) =>{
  switch (action.type){
    case LOAD_CARDS:
      return action.cards;
    case MOVE_LEFT:
      const cards = state.filter(card => parseInt(card.id) !== parseInt(action.card.id));
      console.log("cards is", cards);
      console.log('action card', action.card);
      return [...cards, action.card];

    default:
      return state;
  }
};

export default cards;