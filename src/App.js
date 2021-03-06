import React from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import DisplayMap from './MapContainer/DisplayMap'
import SearchForm from './SearchForm'
import Login from './Login'
import { Button, Modal, Form, Grid } from 'semantic-ui-react'
import Chatroom from './ChatroomContainer/Chatroom'


class App extends React.Component {

  state = {
    currentUser: {},
    courts: [],
    users: [],
    isLoggedIn: false,
    isSignedUp: false,
    showModal: false,
    showMap: true,
    modalFormData: {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: ""
    },
    coordinates: {
      lat: 40.7829,
      lng: -73.9654
    }
  }

  fetchCourts = () => {
    fetch(`http://localhost:3000/courts`)
      .then(resp => resp.json())
      .then(data => this.setState({
        courts: data
      }))
  }

  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        users: data
      }))
  }

  componentDidMount() {
    this.fetchCourts()
    this.fetchUsers()
  }


  toGeoCode = (searchInput) => {
    let address = searchInput.street + searchInput.city + searchInput.stateInitials
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        ...this.state,
        coordinates: {
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
            password: userData.password,
            reviews: userData.reviews
          },
          isLoggedIn: true
        }, () => this.props.history.push('/home'))
      })
  }

  onModalFormChange = (e) => {
    this.setState({
      ...this.state,
      modalFormData: {
        ...this.state.modalFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  modalPush = (e) => {
    e.preventDefault()
    let modalFormData = this.state.modalFormData
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(modalFormData)
    })
    this.setState({
      showModal: false
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  toLogOut = () => {
    this.setState({
      isLoggedIn: false,
      currentUser: {}
    }, () => this.props.history.push('/'))
  }

  deleteUser = (e, currentUser) => {
    let filteredUsers = this.state.users.filter(user => user.id !== currentUser.id)
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "DELETE"
    }).then(resp => resp.json())
      .then(data => 
        this.setState({
        showModal: false,
        users: filteredUsers,
        currentUser: {},
        isLoggedIn: false
      }), () => {
        this.props.history.push('/')
        this.setState({
          showModal: false,
          users: filteredUsers,
          currentUser: {},
          isLoggedIn: false
        })
      }
      )
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

  render() {
    return (
      <div className="App">
        <div className="top">
          {this.state.isLoggedIn && <Modal basic size='mini' className="user-update-modal" closeIcon onClose={this.closeModal} open={this.state.showModal} trigger={<Button className="ui button head" color="blue" onClick={() => this.setState({ showModal: true })}>Edit Profile Info</Button>}>
            <Modal.Header>Update Profile Info</Modal.Header>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder='Email'
                  value={this.state.modalFormData.email}
                  onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder='Username'
                  value={this.state.modalFormData.username}
                  onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={this.state.modalFormData.password}
                  onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password Confirmation</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder='Password Confirmation'
                  value={this.state.modalFormData.passwordConfirmation}
                  onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Button onClick={(e) => this.modalPush(e)} type='submit' value="Update Profile">Update User Profile Info</Button>
              <Button onClick={(e) => this.deleteUser(e, this.state.currentUser)} type='submit' value="Delete Account">Delete Account</Button>
            </Form>
          </Modal>}

          {this.state.isLoggedIn && <Button className="ui button head" color="red" onClick={this.toLogOut}>Logout</Button>}
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
            path='/home'
            render={routerProps =>
              <div>
                {this.state.isLoggedIn && <SearchForm toShowMap={this.toShowMap} toGeoCode={this.toGeoCode} />}
                <Grid columns={2}>
                  <Grid.Column>
                    {this.state.isLoggedIn && <DisplayMap {...routerProps} toShowMap={this.toShowMap} showDetails={this.showDetails} showMap={this.state.showMap} courts={this.state.courts} currentUser={this.state.currentUser} justify-content="left" coordinates={this.state.coordinates} />}
                  </Grid.Column>
                  <Grid.Column>
                    {this.state.isLoggedIn && <Chatroom {...routerProps} currentUser={this.state.currentUser} justify-content="right" />}
                  </Grid.Column>
                </Grid>
              </div>}
          />
        </Switch>
      </div>
    )

  }

}

export default withRouter(App)
