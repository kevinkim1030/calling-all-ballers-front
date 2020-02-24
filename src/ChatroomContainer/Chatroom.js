import React from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Chatroom extends React.Component{
  
  state = {
    displayedMessages: [],
    newMessages: []
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
        newMessages: [...prevState.newMessages, message]
      }
    })
  }

  handleDisplayMessages = () => {
    this.setState(prevState => {
      return {
        displayedMessages: [
          ...prevState.newMessages,
          ...prevState.displayedMessages
        ]
      }
    })
  }

  render(){
    const {displayedMessages, newMessages} = this.state
    console.log(displayedMessages)
    return (
      <div className="Chatroom">
        <ActionCableConsumer
          channel={{ channel: "ChatroomChannel"}}
          onReceived={(message) => {
            console.log(message)
            this.addMessage(message)
          }}
        />
        <MessageList 
          handleDisplayMessages={this.handleDisplayMessages}
          newMessageCount={newMessages.length}
          messages={displayedMessages}
        />
        <MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default Chatroom