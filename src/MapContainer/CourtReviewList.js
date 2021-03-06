import React from 'react'
import ReviewCard from './ReviewCard'

class CourtReviewList extends React.Component{

  // scrollToBottom = () => {
  //   let reviewListForm = document.querySelector('.review-list-form')
  //   reviewListForm.scrollTop = reviewListForm.scrollHeight
  // }

  // componentDidUpdate(){
  //   this.scrollToBottom()
  // }

  render(){
    let filteredReviews
    let displayedFilteredReviews
    if (!!this.props.selectedPlace.court) {
      filteredReviews = this.props.reviews.filter(review => review.court_id === this.props.selectedPlace.court.id)
      displayedFilteredReviews = filteredReviews.map(review => <ReviewCard key={review.id} closeReviewModal={this.props.closeReviewModal} showReviewUpdateModal={this.props.showReviewUpdateModal} updateReview={this.props.updateReview} deleteReview={this.props.deleteReview} currentUser={this.props.currentUser} review={review}/>)
    } 
    return(
      <div className='court-review-list'>
          <ul>
            {/* <hr></hr> */}
              {displayedFilteredReviews}
          </ul>
      </div>
    )
  }
}

export default CourtReviewList