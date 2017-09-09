/* jshint esversion: 6 */

import React from 'react';

export const MOVE_RIGHT = "MOVE_RIGHT";

export default (originalCard) =>{
  const card = { ...originalCard };
  switch (card.status){
    case "queue":
      card.status = "progress"
      break;
    case "progress":
      card.status = "done"
      break;
    default:


  }
  console.log('card status is', card);
  return {
      type: MOVE_RIGHT,
      card: card
    };
};