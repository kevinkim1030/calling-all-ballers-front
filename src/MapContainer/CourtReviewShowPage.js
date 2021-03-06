import React from 'react'
import { Rating, Button } from 'semantic-ui-react'

class CourtReviewShowPage extends React.Component{

  state = {
    avgRating: 0
  }

  toViewMap = () => {
    this.props.toShowMap()
    // this.props.resetSelectedPlaceInfo()
  }
  
  getAvgRating = () => {
    let filteredReviews
    // let filteredRatings
    let sum
    let avgRating
    if (!!this.props.selectedPlace.court){
      filteredReviews = this.props.reviews.filter(review => review.court_id === this.props.selectedPlace.court.id)
      sum = 0
      for( var i = 0; i < filteredReviews.length; i++){
        sum += filteredReviews[i].rating
      }
      avgRating = sum/filteredReviews.length
      return avgRating
    }
  }
  
  render(){
    let filteredReviews
    if (!!this.props.selectedPlace.court){
      filteredReviews = this.props.reviews.filter(review => review.court_id === this.props.selectedPlace.court.id)
    }
    return(
      <div className='court-show-page'>
        <h2>{this.props.selectedPlace.name}</h2>
        <h3>{this.props.selectedPlace.location}</h3>
        <h3>{filteredReviews.length} {filteredReviews.length === 1 && "review with an average rating of "} {filteredReviews.length === 0 && "reviews with an average rating of "} {filteredReviews.length > 1 && "reviews with an average rating of "}
          {!!this.props.selectedPlace.court && <Rating size="huge" disabled icon="star" maxRating={5} rating={this.getAvgRating()} />}
        </h3>
        <Button color="blue" onClick={this.toViewMap}>Back to Map</Button>
        <hr></hr>
      </div>
    )
  }
}

export default CourtReviewShowPage