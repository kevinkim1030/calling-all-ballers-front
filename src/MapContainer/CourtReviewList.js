import React from 'react'
import ReviewCard from './ReviewCard'

class CourtReviewList extends React.Component{

  render(){
    console.log('this.props.activeMarker :', this.props.activeMarker)
    console.log('this.props.activeMarker.court :', this.props.activeMarker.court)
    console.log('this.props.selectedPlace :', this.props.selectedPlace)
    
    
    let displayedReviews
    let filteredReviews
    let displayedFilteredReviews
    if (!!this.props.selectedPlace.court) {
      // displayedReviews = this.props.selectedPlace.court.reviews.map(review => <ReviewCard key={review.id} review={review}  />)
      filteredReviews = this.props.reviews.filter(review => review.court_id === this.props.selectedPlace.court.id)
      displayedFilteredReviews = filteredReviews.map(review => <ReviewCard key={review.id} currentUser={this.props.currentUser} review={review}/>)
      // filteredReviews.forEach(review => console.log('console logging each filtered review : ', review) )
    } 
    console.log('filteredReviews: ', filteredReviews)
    return(
      <div className='court-review-list'>
          <ul>
            {displayedFilteredReviews}
          </ul>
          <hr></hr>
      </div>
    )
  }
}

export default CourtReviewList