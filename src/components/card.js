/* jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moveLeft from '../actions/moveLeft';
import moveRight from '../actions/moveRight';


class Card extends Component {
  constructor(props){
    super(props);


  }

  moveLeft(e){
    console.log(e);
    this.props.moveLeft(this.props);
  }

  moveRight(e){
    console.log('moving right');
    this.props.moveRight(this.props);
  }

  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p>priority: {this.props.priority}</p>
        <p>status: {this.props.status}</p>
        <p>created by: {this.props.createdBy}</p>
        <p>assigned to: {this.props.assignedTo}</p>
        <button onClick={this.moveLeft.bind(this)}>Move Left</button>
        <button onClick={this.moveRight.bind(this)}>Move Right</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    moveLeft: (card) =>{
      dispatch(moveLeft(card))
    },
    moveRight: (card) =>{
      dispatch(moveRight(card))
    }
  }
}

const ConnectedCard = connect(
  null,
  mapDispatchToProps
)(Card)

export default ConnectedCard;