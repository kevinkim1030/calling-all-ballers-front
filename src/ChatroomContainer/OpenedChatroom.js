import React from 'react';
import Message from './Message';

const OpenedChatroom = ({ messages, currentUser }) =>{
  try{
    let chatMessages = messages.map(message => <Message key={message.id} currentUser={currentUser} message={message} users={messages[0].user}/>)
    return (
      <div>
        <div className="ui feed">
          {chatMessages}
        </div>
      </div>
    )
  } catch{
    return(
      <div></div>
    )
  }


}
export default OpenedChatroom
