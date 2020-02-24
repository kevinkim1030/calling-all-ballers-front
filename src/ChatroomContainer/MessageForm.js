import React, { Component } from 'react'

class MessageForm extends Component {
  state = {
    value: ''
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  createMessage = (message) => {
    console.log(message)
    fetch(`http://localhost:3000/messages`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then(resp => resp.json())
  }

  handleSubmit = e => {

    e.preventDefault()
    this.createMessage({content: this.state.value, chatroom_id: 1, user_id: 1})
    this.setState({
      value: ""
    })
    // .then(message => {
    //   this.props.addMessage(message)
    // })
  }

  render() {
    return (
      <div className="ui secondary segment">
        <form onSubmit={this.handleSubmit} action="">
          <div className="ui fluid input">
            <input
              onChange={this.onChange}
              value={this.state.value}
              type="text"
            />
            <button className="ui basic blue button" type="submit">
              New Message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;