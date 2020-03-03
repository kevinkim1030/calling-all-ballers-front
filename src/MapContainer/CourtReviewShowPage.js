import React from 'react'
import { Rating } from 'semantic-ui-react'

class CourtReviewShowPage extends React.Component{


  toViewMap = () => {
    this.props.toShowMap()
    // this.props.resetSelectedPlaceInfo()
  }

  
  render(){
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
    }

    return(
      <div className='court-show-page'>
        <h2>{this.props.selectedPlace.name}</h2>
        <h3>{this.props.selectedPlace.location}</h3>
        <h3>{filteredReviews.length} reviews with average rating of {" "}
          {!!this.props.selectedPlace.court && <Rating size="massive" disabled icon="star" maxRating={5} defaultRating={avgRating} />}
        </h3>
        <button onClick={this.toViewMap}>Back to Map</button>
        <hr></hr>
      </div>
    )
  }
}

export default CourtReviewShowPage