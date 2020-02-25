import React from 'react';
import Message from './Message';

const OpenedChatroom = ({ messages, newMessageCount, handleDisplayMessages }) =>{
  const messageList = messages.map(message=> <Message key={message.id} message={message} />);

  return (
    <div>
      <div className="ui feed">
        {messageList}
      </div>
    </div>
  )
}
export default OpenedChatroom
