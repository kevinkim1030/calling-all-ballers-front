import React from 'react'
import MessageForm from './MessageForm'
import OpenedChatroom from './OpenedChatroom'
import AllChatrooms from './AllChatrooms'
import { ActionCableConsumer } from 'react-actioncable-provider'


class Chatroom extends React.Component{
  
  state = {
    displayedMessages: [],
    channel: 'general'
  }

  fetchChatroom = (chatroomId) => {
    // fetch(`http://localhost:3000/chatrooms/${chatroomId}`)
    fetch(`http://localhost:3000/chatrooms/1`)
      .then(resp => resp.json())
      .then(data => this.setState({
        displayedMessages: data
      }))
  }

  componentDidMount(){
    this.fetchChatroom()
  }

  addMessage = message => {
    this.setState(prevState => {
      return {
        displayedMessages: [...prevState.displayedMessages, message]
      }
    })
  }

  render(){
    const {displayedMessages} = this.state
    console.log(displayedMessages)
    return (
      <div>
        <div className="Chatroom">
          <ActionCableConsumer
            channel={{ channel: "ChatroomChannel"}}
            onReceived={(message) => {
              console.log(message)
              this.addMessage(message)
            }}
          />
          <AllChatrooms />
          <h2>General Chat</h2>
          <div className="chat">
            <OpenedChatroom 
              handleDisplayMessages={this.handleDisplayMessages}
              messages={displayedMessages}
            />
          </div>
          <div className="chat-form">
            <MessageForm 
              addMessage={this.addMessage}
              handleDisplayMessages={this.handleDisplayMessages}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Chatroom