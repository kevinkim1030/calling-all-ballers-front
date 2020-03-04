import React from 'react'
import { Map, GoogleApiWrapper, Marker} from "google-maps-react"
// import { Button } from 'semantic-ui-react'
import DisplayCourtDetails from './DisplayCourtDetails'


class DisplayMap extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    courts: [],
    reviews: [],
    showReviewUpdateModal: false
    // showMap: true
  }

  fetchCourts = () => {
    fetch(`http://localhost:3000/courts`)
      .then(resp => resp.json())
      .then(courtData => this.setState({
        courts: courtData
      }))
  }

  addNewReivew = (someNewReview) => {
    // setState and update reviews to include someNewReivew

  }

  fetchReviews = () => {
    fetch(`http://localhost:3000/reviews`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data
      }))
  }

  componentDidMount(){
    this.fetchCourts()
    this.fetchReviews()
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker
    })
    this.props.showDetails()
  }

  newDisplayedCourts = () => {
    return this.state.courts.map(court => {
      return <Marker 
        icon={{url:"https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png", scaledSize: {width: 40, height: 40}}}
        key={court.id}
        name={court.name}
        location={court.location}
        onClick={this.onMarkerClick}
        position={{lat: court.lat, lng: court.lng}}
        court={court}
    />})
  }

  addToSelectedPlace = (reviewObj) => {
    console.log(reviewObj)
    this.setState({
      reviews: [...this.state.reviews, reviewObj]
    })
  }

  deleteReview = (reviewObj) => {
    console.log('trying to delete')
    let filteredReviews = this.state.reviews.filter(review => review.id !== reviewObj)
    fetch(`http://localhost:3000/reviews/${reviewObj}`,{
      method: "DELETE"
    }).then(resp => resp.json())
    .then(data => this.setState({
      reviews: filteredReviews
    }))
  }

  updateReview = (reviewObj) => {
    this.setState({
      showReviewUpdateModal: true
    })
    console.log('trying to update! and here is the reviewObj.id : ', reviewObj)
    // fetch(`http://localhost:3000/reviews/${reviewObj}`,{
    //   method: "PATCH",
    //   accepts:{
    //     'content-type':'application/json',
    //     accepts: 'application/json'
    //   },
    //   body: JSON.stringify()
    // })
  }

  closeReviewModal = () => {
    this.setState({
      showReviewUpdateModal: false
    })
  }

  render() {
    const mapStyles = {
      width: "70rem",
      height: "70rem"
    }
    let coords = {lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}
    
    return (
      <div className="map-container">
        {this.props.showMap ? 
        <Map
          className={"map"}
          google={this.props.google}
          zoom={16}
          initialCenter= {coords}
          onClick={this.onMapClicked}
          style={mapStyles}
          disableDefaultUI={true}
          mapType={"street"}
          center= {coords}
          mapTypeControl={true}
          streetViewControl={true}
          zoomControl={true}
        >
          {this.props.coordinates.lat !== "" && <Marker 
            position={coords}
            name={"Current Location"}
            // icon={{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: {width: 60, height: 70}}}
            icon={{url:"https://static.thenounproject.com/png/14064-200.png", scaledSize: {width: 60, height: 60}}}
            />}
          {this.newDisplayedCourts()} 
        </Map>
        : 
        <DisplayCourtDetails 
          closeReviewModal={this.closeReviewModal}
          updateReview={this.updateReview}
          deleteReview={this.deleteReview}
          reviews={this.state.reviews} 
          resetSelectedPlaceInfo={this.resetSelectedPlaceInfo} 
          addToSelectedPlace={this.addToSelectedPlace} 
          courts={this.props.courts} 
          currentUser={this.props.currentUser} 
          activeMarker={this.state.activeMarker} 
          selectedPlace={this.state.selectedPlace} 
          toShowMap={this.props.toShowMap} 
          fetchReviews = {this.fetchReviews}
          showReviewUpdateModal={this.props.showReviewUpdateModal}
          />
        }
      </div>
     
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DisplayMap);