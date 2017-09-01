/* jshint esversion: 6 */

import React from 'react';

const Card = (props) =>{
  return(
    <div>
      <h3>{props.title}</h3>
      <p>priority: {props.priority}</p>
      <p>column: {props.status}</p>
      <p>created by: {props.createdBy}</p>
      <p>assigned to: {props.assignedTo}</p>
    </div>
    )
}

export default Card;