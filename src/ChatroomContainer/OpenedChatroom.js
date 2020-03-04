// import React from 'react'
// import Message from './Message'

// const OpenedChatroom = ({ messages, currentUser }) =>{
//   try{
//     let chatMessages = messages.map(message => 
//       message.user_id === currentUser.id ? 
//       <Message css = {'other'} key={message.id} currentUser={currentUser} message={message} users={messages[0].user}/> : 
//       <Message css = {'self'} key={message.id} currentUser={currentUser} message={message} users={messages[0].user}/>)
//     return (
//       <div className="ui feed">
//           {chatMessages}
//       </div>
//     )
//   } catch{
//     return(
//       <div></div>
//     )
//   }


// }
// export default OpenedChatroom

import React from 'react'
import Message from './Message'

class OpenedChatroom extends React.Component{

  
  scrollToBottom = () => {
    let chat = document.querySelector('.chat')
    chat.scrollTop = chat.scrollHeight

  }

  componentDidUpdate(){
    this.scrollToBottom()
  }
  
  render(){

    try{
      let chatMessages = this.props.messages.map(message => 
        message.user_id === this.props.currentUser.id ? 
        <Message css = {'other'} key={message.id} currentUser={this.props.currentUser} message={message} users={this.props.messages[0].user}/> : 
        <Message css = {'self'} key={message.id} currentUser={this.props.currentUser} message={message} users={this.props.messages[0].user}/>)
      return (
        <div className="ui feed">
            {chatMessages}
        </div>
      )
    } catch{
      return(
        <div></div>
      )
    }
  }
}
export default OpenedChatroom