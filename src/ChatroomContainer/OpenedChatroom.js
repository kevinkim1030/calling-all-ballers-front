import React from 'react';
import Message from './Message';

const OpenedChatroom = ({ messages, currentUser }) =>{
  debugger
  const messageList = messages.map(message=> <Message key={message.id} currentUser={currentUser} message={message} />);

  return (
    <div>
      <div className="ui feed">
        {messageList}
      </div>
    </div>
  )
}
export default OpenedChatroom
