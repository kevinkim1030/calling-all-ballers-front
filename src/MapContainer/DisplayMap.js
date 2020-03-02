import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import { Button } from 'semantic-ui-react'
import DisplayCourtDetails from './DisplayCourtDetails'


class DisplayMap extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    courts: [],
    reviews: [],
    showMap: true
  }

  fetchCourts = () => {
    fetch(`http://localhost:3000/courts`)
      .then(resp => resp.json())
      .then(courtData => this.setState({
        courts: courtData
      }))
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
    // console.log(props)
    // console.log(marker.court.reviews)
    this.setState({
      selectedPlace: props,
      activeMarker: marker
      // showingInfoWindow: true
    })
    this.showDetails()
  }

  toShowMap = () => {
    this.setState({
      showMap: true
    })
  }

  showDetails = () => {
    this.setState({
      showMap: false
    })
  }

  newDisplayedCourts = () => {
    return this.state.courts.map(court => {
      return <Marker 
        key={court.id}
        name={court.name}
        location={court.location}
        onClick={this.onMarkerClick}
        position={{lat: court.lat, lng: court.lng}}
        court={court}
    />})
  }

  // addToSelectedPlace = (reviewObj) => {
  //   // console.log('hitting addToSelectedPlace')
  //   this.setState({
  //     selectedPlace:{
  //       ...this.state.selectedPlace,
  //       court:{
  //         ...this.state.selectedPlace.court,
  //         reviews:[...this.state.selectedPlace.court.reviews, reviewObj]
  //       }
  //     }
  //   })
  // }

  addToSelectedPlace = (reviewObj) => {
    this.setState({
      reviews: [...this.state.reviews, reviewObj]
    })
  }

  // resetSelectedPlaceInfo = () => {
  //   this.setState({
  //     selectedPlace:{
  //       ...this.state.selectedPlace,
  //       court:{
  //         ...this.state.selectedPlace.court,
  //         reviews: [...this.state.selectedPlace.court.reviews]
  //       }
  //     }
  //   })
  // }

  render() {
    const mapStyles = {
      width: "900px",
      height: "900px"
    }
    let coords = {lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}
    
    return (
      <div className="map-container">
        {this.state.showMap ? 
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
            icon={{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: {width: 60, height: 70}}}
            />}
          {this.newDisplayedCourts()} 
        </Map>
        : 
        <DisplayCourtDetails 
          reviews={this.state.reviews} 
          resetSelectedPlaceInfo={this.resetSelectedPlaceInfo} 
          addToSelectedPlace={this.addToSelectedPlace} 
          courts={this.props.courts} 
          currentUser={this.props.currentUser} 
          activeMarker={this.state.activeMarker} 
          selectedPlace={this.state.selectedPlace} 
          toShowMap={this.toShowMap} />
        }
      </div>
     
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DisplayMap);