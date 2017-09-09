/* jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/cardActions.js';


class NewCard extends Component{
  constructor(props) {
      super(props);

      this.state = {
        id: '',
        title: '',
        priority: '',
        status: '',
        createdBy: '',
        assignedTo: ''
      };
    }


  handleSubmit(event) {
    console.log('handleSubmit');
    this.props.addCardProps({id: this.state.id,
                             title: this.state.title,
                             priority: this.state.priority,
                             status: this.state.status,
                             createdBy: this.state.createdBy,
                             assignedTo: this.state.assignedTo
                           });
  }

  handleIdChange(e){
    this.setState({
      id: e.target.value
    });
  }

  handleTitleChange(e){
    console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  }

  handlePriorityChange(e){
    this.setState({
      priority: e.target.value
    });
  }

  handleStatusChange(e){
    this.setState({
      status: e.target.value
    });
  }

  handleCreatedChange(e){
    this.setState({
      createdBy: e.target.value
    });
  }

  handleAssignedChange(e){
    this.setState({
      assignedTo: e.target.value
    });
  }

  render() {
    return(
      <div className="card-form">
        <label htmlFor="new-card-id">Id</label>
        <input onChange={this.handleIdChange.bind(this)}type="text" name="id"/>
        <br/>
        <label htmlFor="new-card-title">title</label>
        <input onChange={this.handleTitleChange.bind(this)} type="text" name="title"/>
        <br/>
        <label htmlFor="new-card-priority">priority</label>
        <input onChange={this.handlePriorityChange.bind(this)}type="text" name="priority"/>
        <br/>
        <label htmlFor="new-card-status">status</label>
        <input onChange={this.handleStatusChange.bind(this)}type="text" name="status"/>
        <br/>
        <label htmlFor="new-card-createdBy">created by</label>
        <input onChange={this.handleCreatedChange.bind(this)}type="text" name="createdBy"/>
        <br/>
        <label htmlFor="new-card-assignedTo">assigned to</label>
        <input onChange={this.handleAssignedChange.bind(this)}type="text" name="assignedTo"/>
        <br/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>

      )
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    addCardProps: (card) => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCard = connect(
  null,
  mapDispatchToProps
  )(NewCard)

export default ConnectedNewCard;