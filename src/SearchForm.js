import React from 'react'

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
      <div className="search">
        <h2>Enter Your Location</h2>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="street" value={this.state.street} onChange={this.changeHandler} placeholder="Street"/>
          <input type="text" name="city" value={this.state.city} onChange={this.changeHandler} placeholder="City"/>
          <input type="text" name="stateInitials" value={this.state.state} onChange={this.changeHandler} placeholder="State Initials"/>
          <input className="search-form-button" type="submit" value="Look Up Courts!" />
        </form>
      </div>
    )
  }
}

export default SearchForm

{/* <div >
{this.props.loggedIn && 
    <form onSubmit={this.submitHandler}>
        <input onChange={this.changeHandler} type="text" value={this.state.searchTerm} placeholder="Search Movie"></input>
        <input className="search-form-button" type="submit" value="Find That Movie!"></input>
    </form>}
</div> */}