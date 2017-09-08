/* jshint esversion: 6 */

import { KBcards } from '../lib/KBcards.js';

export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = (cards) =>{
  return function(dispatch) {
    return KBcards()
    .then( ( {cards} ) =>{
      console.log("cards are", cards)
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  };
};