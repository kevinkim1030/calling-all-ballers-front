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
    showMap: true
  }

  fetchCourts = () => {
    fetch(`http://localhost:3000/courts`)
      .then(resp => resp.json())
      .then(courtData => this.setState({
        courts: courtData
      }))
  }

  componentDidMount(){
    this.fetchCourts()
  }

  onMarkerClick = (props, marker, e) => {
    this.showDetails()
    this.setState({
      selectedPlace: props,
      activeMarker: marker
      // showingInfoWindow: true
    })
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
        <DisplayCourtDetails selectedPlace={this.state.selectedPlace} toShowMap={this.toShowMap} />
        }
      </div>
     
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DisplayMap);