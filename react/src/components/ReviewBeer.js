import React from 'react';
import { browserHistory, Link } from 'react-router';

const ReviewShow = (props) => {
  /* const { body, rating, author, handleVote, votes, id, thisUser, hasVoted } = props */

/*
  let onUpClick = () => {
    let payload = {
      id: id,
      vote: true
    }
    handleVote(payload)
    window.location.reload()
  }

  let onDownClick = () => {
    let payload = {
      id: id,
      vote: false
    }
    handleVote(payload)
  }

  let upCount = () => {
    let count = 0
    votes.forEach((vote) => {
      if (vote.votes === true ) {
        count++;
      }
    })
    return count;
  }

  let downCount = () => {
    let count = 0
    votes.forEach((vote) => {
      if (vote.votes === false ) {
        count++;
      }
    })
    return count;
  }

  */

  return(
    <div id="prueba">
      <p className="review-body"> {props.body}</p>
      <p className="review-rating">{props.rating} stars rating</p>
      {/* <span className="upvote" onClick={onUpClick}>
        ⬆{upCount()}
      </span>
      <span className="downvote" onClick={onDownClick}>
        ⬇{downCount()}
      </span> */}
    </div>
)}

export default ReviewShow;
