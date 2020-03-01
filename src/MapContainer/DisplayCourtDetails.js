import React from 'react'
import CourtReviewList from './CourtReviewList'
import CourtReviewForm from './CourtReviewForm'
import CourtReviewShowPage from './CourtReviewShowPage'


class DisplayCourtDetails extends React.Component{
  
  // toViewMap = () => {
  //   this.props.toShowMap()
  // }
  
  render(){
    return (
      <div className='map-container'>
        
        {/* <div>{this.props.selectedPlace.name}</div>
        <div>{this.props.selectedPlace.location}</div>
        <button onClick={this.toViewMap}>Back to Map</button> */}
        <CourtReviewShowPage selectedPlace={this.props.selectedPlace} toShowMap={this.toShowMap} />
        <CourtReviewList />
        <CourtReviewForm />
      </div>
    )
  }
}

export default DisplayCourtDetails