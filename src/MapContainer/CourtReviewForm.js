import React from 'react'
import { Form, Rating } from 'semantic-ui-react'

class CourtReviewForm extends React.Component {

  state = {
    review: "",
    rating: 0
  }

  onChangeReview = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  ratingHandler = (e, data) => {
    console.log("value of e: ", e, "value of data: ", data)
    this.setState({
      rating: data.rating
    })
  }

  reviewSubmitHandler = (e) => {
    console.log('trying to submit')
    e.preventDefault()
    let reviewObj = {rating: this.state.rating, content: this.state.review, user_id: this.props.currentUser.id, court_id: this.props.selectedPlace.court.id}
    fetch(`http://localhost:3000/reviews`,{
      method: "POST",
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(reviewObj)
    }).then(resp => resp.json())
    .then(reviewData => {
      this.props.fetchReviews()
      this.props.addToSelectedPlace(reviewData)
    })
    this.setState({
      review: "",
      rating: 0
    })
  }

  

  render() {
    return (
      <div className='court-review-form'>
        <label>Rate this Court!</label>
        <Rating icon='star' rating={this.state.rating} maxRating={5} onRate={(data, e) => this.ratingHandler(data, e)}/> 
        <Form onSubmit={this.reviewSubmitHandler}>
          <Form.TextArea name='review' value={this.state.review} onChange={this.onChangeReview} label='New Review:' placeholder='Leave a review...' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CourtReviewForm