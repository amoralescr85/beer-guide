import React, { Component } from 'react';
import ReviewShow from '../components/ReviewBeer';
import FormContainer from './FormContainer';

class ShowFormContainer extends Component {
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

    fetch(`/api/v1/reviews/${beerId}`, {
      credentials: 'same-origin',
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ beerReviews: responseData })
      })
  }
  addNewReview(payload) {
    let beerId = this.props.params.id;
    fetch(`/api/v1/reviews/`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then( () => {
      fetch(`/api/v1/reviews/${beerId}`, {
        credentials: 'same-origin',
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ beerReviews: responseData })
      })
    });
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

    let reviewers = []
    let beerReviews = this.state.beerReviews.map(beerReview => {
      return(
        <ReviewShow
          key={beerReview.id}
          body={beerReview.body}
          id={beerReview.id}
          rating={beerReview.rating}
          author={beerReview.username}

         />
      )
    })

    return(
      <div className="small-9 small-centered columns main">
        <div>
        {beerReviews}
        </div>

        <div>
        <FormContainer
          addNewReview={this.addNewReview}
          beerId={this.props.params.id}
        />
        </div>

      </div>
    )
  }
}

export default ShowFormContainer;
