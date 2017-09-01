/* jshint esversion: 6 */

import React from 'react';

const Card = (props) =>{
  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.priority}</p>
      <p>{props.status}</p>
      <p>{props.createdBy}</p>
      <p>{props.assignedTo}</p>
    </div>
    )
}

export default Card;