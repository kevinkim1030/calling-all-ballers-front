import React from 'react'
import './App.css'
import DisplayMap from './MapContainer/DisplayMap'
import SearchForm from './SearchForm'
import Login from './Login'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import { Map, GoogleApiWrapper, Polygon } from "google-maps-react"

class App extends React.Component {

  state = {
    loggedIn: false,
    coordinates:{
      lat: 40.7829,
      lng: -73.9654
    }
  }

  toGeoCode = (searchInput) => {
    let address = searchInput.street+searchInput.city+searchInput.stateInitials
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      ...this.state,
      coordinates:{
        ...this.state.coordinates,
        lat: data["results"][0]["geometry"]["location"]["lat"],
        lng: data["results"][0]["geometry"]["location"]["lng"]
      }
    })
    )
  }

  render (){
    console.log(this.state.coordinates)
    return (
      <div className="App">
        <Button 
          variant="contained" 
          color="primary" 
          href="/login">
          Log In/Sign Up
        </Button>
        {!this.state.loggedIn && <Login />}
        {this.state.loggedIn && <SearchForm toGeoCode={this.toGeoCode} />}
        {this.state.loggedIn && <DisplayMap coordinates={this.state.coordinates}/>}
        <SearchForm toGeoCode={this.toGeoCode}/>
        <DisplayMap coordinates={this.state.coordinates}/>
      </div>
    );

  }

}

export default App;
