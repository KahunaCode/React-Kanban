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
  return function(dispatch) {
    return addCardToDB(card)
    .then((status) =>{
      if (status === "OK!"){
        dispatch({
          type: ADD_CARD,
          card: card
        });
      }
    });
  };
};