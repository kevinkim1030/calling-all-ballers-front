import React from 'react'
import CourtReviewList from './CourtReviewList'
import CourtReviewForm from './CourtReviewForm'
import CourtReviewShowPage from './CourtReviewShowPage'


class DisplayCourtDetails extends React.Component{
  
  render(){
    return (
      <div className='map-container'>
        <CourtReviewShowPage reviews={this.props.reviews} resetSelectedPlaceInfo={this.props.resetSelectedPlaceInfo} currentUser={this.props.currentUser} selectedPlace={this.props.selectedPlace} toShowMap={this.props.toShowMap} />
        <CourtReviewList currentUser={this.props.currentUser} reviews={this.props.reviews} courts={this.props.courts} activeMarker={this.props.activeMarker} selectedPlace={this.props.selectedPlace} />
        <CourtReviewForm addToSelectedPlace={this.props.addToSelectedPlace} selectedPlace={this.props.selectedPlace} currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default DisplayCourtDetails