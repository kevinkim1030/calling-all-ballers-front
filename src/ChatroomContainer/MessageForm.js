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

  createMessage = () => {
    let postObj = {content: this.state.value, chatroom_id: 1, user_id: this.props.currentUser.id, username: this.props.currentUser.username}
    fetch(`http://localhost:3000/messages`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(postObj)
    })
      // .then(resp => resp.json())
      // .then(message => {
      // this.props.addMessage(message)
      // })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.createMessage()
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div className="ui secondary segment message-form">
        <form onSubmit={this.handleSubmit} action="">
          <div className="ui fluid input">
            <input
              onChange={this.onChange}
              value={this.state.value}
              type="text"
            />
            <button  onClick={this.handleSubmit} className="ui basic blue button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
