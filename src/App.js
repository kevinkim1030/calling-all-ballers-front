import React from 'react'
import './App.css'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import DisplayMap from './MapContainer/DisplayMap'
import SearchForm from './SearchForm'
import Login from './Login'
import { Button } from 'semantic-ui-react'
// import Button from '@material-ui/core/Button'
import Chatroom from './ChatroomContainer/Chatroom'
import {Grid} from 'semantic-ui-react'
import Header from './Header'
import Profile from './Profile'


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
    console.log("loginData :", loginData)
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
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
        }, () => this.props.history.push('/main'))
      })
  }

  toLogOut = () => {
    this.setState({
      isLoggedIn: false,
      currentUser: {}
    }, () => this.props.history.push('/'))
  }

  // onSignUp = (loginData) => {
  //   fetch(`http://localhost:3000/users`,{
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       accepts: "application/json"
  //     },
  //     body: JSON.stringify(loginData)
  //   }).then(resp => resp.json())
  //     .then(data)
  //   this.setState({ isSignedUp: !this.state.isSignedUp })
  // }
  
  render (){
    console.log("this.state : ", this.state)
    return (
      <div className="App">
        <div className="top">
          {this.state.isLoggedIn && <Button color="blue" as={Link} to="/profile">Profile</Button>}
          {this.state.isLoggedIn && <Button color="blue" onClick={this.toLogOut}>Logout</Button>}
          <Header />
        </div>
          {!this.state.isLoggedIn && <Login onSubmit={this.onSubmit} />}
        <Switch>
          <Route
            exact
            path='/login'
            render={routerProps => <Login {...routerProps} onSubmit={this.onSubmit} />}
            />
          <Route
            exact
            path='/main'
            render={routerProps => 
              <div>
            <SearchForm toGeoCode={this.toGeoCode} />
              <Grid columns={2}>
                <Grid.Column>
                  {this.state.isLoggedIn && <DisplayMap {...routerProps} justify-content="left" coordinates={this.state.coordinates}/>}
                </Grid.Column>
                <Grid.Column>
                  {this.state.isLoggedIn && <Chatroom {...routerProps} currentUser={this.state.currentUser} justify-content="right"/>}
                </Grid.Column>
              </Grid>
              </div>}
          />
        </Switch>
          {/* <Grid columns={2}>
            <Grid.Column>
              {this.state.isLoggedIn && <DisplayMap justify-content="left" coordinates={this.state.coordinates}/>}
            </Grid.Column>
            <Grid.Column>
              {this.state.isLoggedIn && <Chatroom currentUser={this.state.currentUser} justify-content="right"/>}
            </Grid.Column>
          </Grid> */}
      </div>
    )

  }

}

export default withRouter(App)
