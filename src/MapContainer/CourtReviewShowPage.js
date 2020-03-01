import React from 'react'

class CourtReviewShowPage extends React.Component{

  toViewMap = () => {
    this.props.toShowMap()
  }

  render(){
    return(
      <div>
        <div>{this.props.selectedPlace.name}</div>
        <div>{this.props.selectedPlace.location}</div>
        <button onClick={this.toViewMap}>Back to Map</button>
      </div>
    )
  }
}

export default CourtReviewShowPage