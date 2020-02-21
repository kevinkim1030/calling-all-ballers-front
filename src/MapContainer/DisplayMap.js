import React from 'react'
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import courts from '../courts'
import DisplayCourtDetails from './DisplayCourtDetails'
// import Marker from './Marker'


class DisplayMap extends React.Component {

  onMarkerClick = () => {
    console.log('marker being clicked')
  }

  render() {
    const mapStyles = {
      width: "600px",
      height: "600px"
    };
    console.log(courts)

    let displayedCourts = courts.map(court => (
                                    <Marker 
                                      key={court["Id"]}
                                      name={court["Name"]}
                                      onClick={this.onMarkerClick}
                                      position={{lat: court["Coordinates"]["lat"], lng: court["Coordinates"]["lng"]}}
                                      court={court}/>))

    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          disableDefaultUI={true}
          mapType={"hybrid"}
          initialCenter= {{lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}}
          center= {{lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}}
          mapTypeControl={true}
          streetViewControl={true}
          zoomControl={true}
        >
          {this.props.coordinates.lat !== "" ? <Marker 
            position={{lat: this.props.coordinates.lat, lng: this.props.coordinates.lng}}
            name={"Current Location"}
            icon={{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", scaledSize: {width: 60, height: 70}}}
            /> : null}
          {/* <Marker
            // className="marker"
            position={{lat: 40.7829, lng: -73.9654}}
            name={"My Marker"}
            onClick={this.onMarkerClick}
          /> */}
          {displayedCourts}
        </Map>
        <DisplayCourtDetails />
      </div>
     
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(DisplayMap);