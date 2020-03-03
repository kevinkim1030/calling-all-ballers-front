import React from 'react';
import Message from './Message';

const OpenedChatroom = ({ messages, currentUser }) =>{
  try{
    let chatMessages = messages.map(message => 
      message.user_id === currentUser.id ? 
      <Message css = {'self'} key={message.id} currentUser={currentUser} message={message} users={messages[0].user}/> : 
      <Message css = {'other'} key={message.id} currentUser={currentUser} message={message} users={messages[0].user}/>)
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
export default OpenedChatroom
