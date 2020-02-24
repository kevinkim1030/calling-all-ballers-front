import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow, Circle } from "google-maps-react"
import courts from '../courts'
import DisplayCourtDetails from './DisplayCourtDetails'


class DisplayMap extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    courts: []
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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
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
    console.log(this.props)
    const mapStyles = {
      width: "700px",
      height: "700px"
    };
    console.log(courts)
    console.log(this.state.courts)
    let coords = {lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}

    // let displayedCourts = courts.map(court => (
    //                                 <Marker 
    //                                   key={court["Id"]}
    //                                   name={court["Name"]}
    //                                   location={court["Location"]}
    //                                   onClick={this.onMarkerClick}
    //                                   position={{lat: court["Coordinates"]["lat"], lng: court["Coordinates"]["lng"]}}
    //                                   court={court}
    //                                   />))

    // let newDisplayedCourts = this.state.courts.map(court => (
    //                                 <Marker 
    //                                   key={court.id}
    //                                   name={court.name}
    //                                   location={court.location}
    //                                   onClick={this.onMarkerClick}
    //                                   position={{lat: court.coordinates.lat, lng: court.coordiates.lng}}
    //                                   court={court}
    //                                   />))

    return (
      <div className="map-container">
        <Map
        className={"map"}
          google={this.props.google}
          zoom={15}
          initialCenter= {coords}

          onClick={this.onMapClicked}
          style={mapStyles}
          disableDefaultUI={true}
          // mapType={"hybrid"}
          mapType={"street"}
          center= {coords}
          mapTypeControl={true}
          streetViewControl={true}
          zoomControl={true}
        >
          {/* <Circle
            radius={1609}
            // ref={(circle) => {this._circle = circle}}
            center={coords}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='#FF0000'
            fillOpacity={0.2}
          /> */}
          {this.props.coordinates.lat !== "" && <Marker 
            position={coords}
            name={"Current Location"}
            icon={{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: {width: 60, height: 70}}}
            />}
          {this.newDisplayedCourts()} 
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h2>{this.state.selectedPlace.name}</h2>
                <h3>{this.state.selectedPlace.location}</h3>
              </div>
          </InfoWindow>
        </Map>
        {/* <DisplayCourtDetails /> */}
      </div>
     
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DisplayMap);