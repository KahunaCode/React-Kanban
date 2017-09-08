/* jshint esversion: 6 */

import { LOAD_CARDS } from '../actions/cardActions.js';

const initialState = [];

const cards = (state=initialState, action) =>{
  switch (action.type){
    case LOAD_CARDS:
      return action.cards

    default:
      return state;
  }
};

export default cards;