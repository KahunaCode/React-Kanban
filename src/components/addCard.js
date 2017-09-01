/* jshint esversion: 6 */

import React, { Component } from 'react';

class NewCard extends Component{
  render() {
    return(
      <div className="card-form">
        <label htmlFor="new-card-title">title</label>
        <input type="text" name="title"/>
        <br/>
        <label htmlFor="new-card-priority">priority</label>
        <input type="text" name="priority"/>
        <br/>
        <label htmlFor="new-card-status">status</label>
        <input type="text" name="status"/>
        <br/>
        <label htmlFor="new-card-createdBy">created by</label>
        <input type="text" name="createdBy"/>
        <br/>
        <label htmlFor="new-card-assignedTo">assigned to</label>
        <input type="text" name="assignedTo"/>
        <br/>
        <button>Submit</button>
      </div>

      )
  }

}

export default NewCard;