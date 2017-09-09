/* jshint esversion: 6 */

import React from 'react';

export const MOVE_LEFT = "MOVE_LEFT";

export default (originalCard) =>{
  const card = { ...originalCard };
  switch (card.status){
    case "progress":
      card.status = "queue"
      break;
    case "done":
      card.status = "progress"
      break;
    default:


  }
  console.log('card status is', card);
  return {
      type: MOVE_LEFT,
      card: card
    };
};