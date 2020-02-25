import React from 'react'
import './App.css'
import DisplayMap from './MapContainer/DisplayMap'
import SearchForm from './SearchForm'
import Login from './Login'
import Button from '@material-ui/core/Button'
import Chatroom from './ChatroomContainer/Chatroom'
import {Grid, Segment, Divider} from 'semantic-ui-react'
import Header from './Header'


class App extends React.Component {

  state = {
    currentUser: {},
    isLoggedIn: false,
    isSignedUp: false,
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

  onSubmit = (loginData) => {
    this.toLogIn(loginData)
  }

  toLogIn = (loginData) => {
    console.log(loginData)
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application.json"
      },
      body: JSON.stringify(loginData)
    }).then(resp => resp.json())
      .then(userData => {
        this.setState({
          ...this.state,
          currentUser: {
            ...this.state.currentUser,
            id: userData.id,
            email: userData.email,
            username: userData.username,
            password: userData.password
          },
          isLoggedIn: true
        }, () => console.log("logged in state: ", this.state.isLoggedIn))
      })
  }

  onSignUp = () => {
    this.setState({ isSignedUp: !this.state.isSignedUp })
  }
  
  render (){
    console.log(this.state)
    return (
      <div className="App">
        <div className="top">
          <Button 
            className="logout-button"
            variant="contained" 
            color="primary" 
            href="/login">
            Log Out
          </Button>
          <Header />
        </div>
        {!this.state.isLoggedIn && <Login onSubmit={this.onSubmit} />}
        {this.state.isLoggedIn && <SearchForm toGeoCode={this.toGeoCode} />}
        {/* <Segment> */}
          <Grid columns={2}>
            <Grid.Column>
              {/* <DisplayMap justify-content="left" coordinates={this.state.coordinates}/> */}
              {this.state.isLoggedIn && <DisplayMap justify-content="left" coordinates={this.state.coordinates}/>}
            </Grid.Column>
            <Grid.Column>
              {this.state.isLoggedIn && <Chatroom justify-content="right"/>}
            </Grid.Column>
          </Grid>
          {/* <Divider vertical></Divider> */}
        {/* </Segment> */}
      </div>
    )

  }

}

export default App;
