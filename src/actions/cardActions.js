/* jshint esversion: 6 */

import { KBcards, addCardToDB } from '../lib/KBcards.js';


export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = "ADD_CARD";

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

export const addCard = (card) => {
 console.log('firing addcard action ', card);
  return function(dispatch) {
    return addCardToDB(card)
    .then(({cards}) =>{
        console.log('dispatching ', cards);
        dispatch({
          type: LOAD_CARDS,
          cards: cards
        });
    });
  };
};