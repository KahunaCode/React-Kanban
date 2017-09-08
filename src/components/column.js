/* jshint esversion: 6 */

import React from 'react';

import Card from './card';

export default ({ id, title, cards}) => {
  return (
  <div id={id}>
          <h3>{title}</h3>
          <ul>
            { cards.map(card => <Card title={card.title} priority={card.priority} status={card.status} createdBy={card.createdBy} assignedTo={card.assignedTo} />)}
          </ul>
        </div>
    )
}