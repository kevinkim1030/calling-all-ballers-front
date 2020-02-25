import React from 'react'
import {Form, Input, Container, Header} from 'semantic-ui-react'

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
    this.setState({
      street: "",
      city: "",
      stateInitials: ""
    })

  }

  render(){
    return(
      <Container textAlign="center">
        <Form onSubmit={this.submitHandler}>
          <h2 class="ui white header">Enter Your Location</h2>
          <Input type="text" name="street" value={this.state.street} onChange={this.changeHandler} placeholder="Street"/>
          <Input type="text" name="city" value={this.state.city} onChange={this.changeHandler} placeholder="City"/>
          <Input type="text" name="stateInitials" value={this.state.state} onChange={this.changeHandler} placeholder="State Initials"/>
          <Input type="submit" value="Look Up Courts!" />
        </Form>
      </Container>
    )
  }
}

export default SearchForm

{/* <div >
{this.props.loggedIn && 
    <Form onSubmit={this.submitHandler}>
        <input onChange={this.changeHandler} type="text" value={this.state.searchTerm} placeholder="Search Movie"></input>
        <input className="search-form-button" type="submit" value="Find That Movie!"></input>
    </form>}
</div> */}