/* jshint esversion: 6 */

import React, { Component } from 'react';

class NewCard extends Component{
  handleSubmit(event) {
    console.log('handleSubmit');
  }

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
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>

      )
  }

}

export default NewCard;