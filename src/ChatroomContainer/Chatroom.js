import React from 'react'
import MessageForm from './MessageForm'
import OpenedChatroom from './OpenedChatroom'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Chatroom extends React.Component{
  
  state = {
    displayedMessages: [],
    chatrooms: [],
    activeChatroom: null
  }

  fetchChatroom = (chatroomId) => {
    fetch(`http://localhost:3000/chatrooms/`)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
        displayedMessages: data[0].messages
      })
      )
  }

  addMessage = message => {
    this.setState(prevState => {
      return {
        displayedMessages: [...prevState.displayedMessages, message.message]
      }
    })
  }

  // fetchMessages = () => {
  //   fetch(`http://localhost:3000/messages`)
  //     .then(resp => resp.json())
  //     .then(data => 
  //       this.setState(prevState => {
  //         return{
  //           displayedMessages: [...prevState.displayedMessages, data]
  //         }
  //     }))
  // }

  componentDidMount(){
    this.fetchChatroom()
  }

  // handleReceivedChatroom = response => {
  //   const { chatroom } = response
  //   this.setState({
  //     chatrooms: [...this.state.chatrooms, chatroom]
  //   })
  // }

  // handleReceivedMessage = response => {
  //   const { message } = response;
  //   const chatrooms = [...this.state.chatrooms]
  //   const chatroom = chatrooms.find(
  //     chatroom => chatroom.id === message.chatroom_id
  //   )
  //   chatroom.messages = [...chatroom.messages, message]
  //   this.setState({ chatrooms })
  // }

  render(){
    return (
      <div>
        <div className="Chatroom">
          <ActionCableConsumer
            channel={{ channel: "ChatroomChannel"}}
            onReceived={(message) => {
              console.log(message)
              // debugger
              this.addMessage(message)
            }}
          >
          <div className="chat-container">
            <h2>General Chat</h2>
            <div className="chat">
              <OpenedChatroom 
                currentUser={this.props.currentUser}
                // handleDisplayMessages={this.handleDisplayMessages}
                messages={this.state.displayedMessages}
              />
            </div>
            <div className="chat-form">
              <MessageForm 
                currentUser={this.props.currentUser}
                addMessage={this.addMessage}
                handleDisplayMessages={this.handleDisplayMessages}
              />
            </div>
          </div>
          </ActionCableConsumer>
        </div>
      </div>
    )
  }
}

export default Chatroom