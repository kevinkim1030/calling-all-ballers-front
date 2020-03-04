import React from 'react'
import {Form, Input, Container } from 'semantic-ui-react'

class SearchForm extends React.Component{

  state = {
    street: "",
    city: "",
    stateInitials: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.toGeoCode(this.state)
    this.props.toShowMap()
    this.setState({
      street: "",
      city: "",
      stateInitials: ""
    })

  }

  render(){
    return(
      <Container className="search" textAlign="center">
        <Form onSubmit={this.submitHandler}>
          <h2 className="ui white header">Enter Your Location</h2>
          <Input required type="text" name="street" value={this.state.street} onChange={this.changeHandler} placeholder="Street"/>
          <Input required type="text" name="city" value={this.state.city} onChange={this.changeHandler} placeholder="City"/>
          <Input type="text" name="stateInitials" value={this.state.stateInitials} onChange={this.changeHandler} placeholder="State Initials"/>
          <Input type="submit" value="Look Up Courts!" />
        </Form>
      </Container>
    )
  }
}

export default SearchForm