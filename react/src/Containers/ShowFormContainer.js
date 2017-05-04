import React, { Component } from 'react';
import ReviewShow from '../components/ReviewBeer';
import FormContainer from './FormContainer';

class ReviewShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerReviews: [],
      user: []
    }
    this.addNewReview = this.addNewReview.bind(this)
    this.handleVote = this.handleVote.bind(this)
    this.hasUserVoted = this.hasUserVoted.bind(this)
  }

  componentDidMount() {
    let beerId = this.props.params.id;
    // fetch(`/api/v1/beerreviews/${beerId}`, {
    //   credentials: 'same-origin',
    //   method: 'GET'
    // })
    //   .then(response => response.json())
    //   .then(responseData => {
    //     debugger;
    //     this.setState({
    //     //   reviews: [...this.state.beerReviews, ...responseData.beerReviews],
    //       user: [responseData.user]
    //      })
    //   })
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      debugger;
      this.setState( {user: responseData.user} )
    });
  }
  addNewReview(payload) {
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData.review)
      this.setState({ beerReviews: [...this.state.beerReviews, responseData.beerReview] })
    })
  }

  handleVote(payload){
    fetch(`/api/v1/beerReviews/${payload.id}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({updown: payload})
    })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.status !== 201) {
        notify.show(responseData.error, 'error', 1800)
      } else {
        notify.show(responseData.message, 'success', 1800)
        this.setState({ beerReviews: responseData.beerReviews })
      }
    })
  }

  hasUserVoted(reviewers) {
    if (reviewers.includes(this.state.user[0])) {
      return 'voted'
    }
  }

  render() {
    let beerReviews = this.state.beerReviews.map(beerReview => {
      let reviewers = []
      beerReview.votes.forEach(vote => {
        reviewers.push(vote.reviewer)
      })

      return(
        <beerReviewShow
          id={beerReview.id}
          body={beerReview.body}
          key={"beerReview" + beerReview.id}
          rating={beerReview.rating}
          author={beerReview.username}
          votes={beerReview.votes}
          handleVote={this.handleVote}
          thisUser={this.state.user[0]}
          hasVoted={this.hasUserVoted(reviewers)}
         />
      )
    })

    return(
      <div className="small-9 small-centered columns main">
        {beerReviews.reverse()}
        <FormContainer
          addNewReview={this.addNewReview}
          beerId={this.props.params.id}
        />
      </div>
    )
  }
}

export default ReviewShowContainer;
