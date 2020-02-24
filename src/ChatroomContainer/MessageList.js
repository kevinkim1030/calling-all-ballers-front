import React from 'react';
import Message from './Message';
import NewMessageInfo from './NewMessageInfo';

const MessageList = ({ messages, newMessageCount, handleDisplayMessages }) => {
  const messageList = messages.map(message=> <Message key={message.id} message={message} />);

  return (
    <div>
      <div className="ui feed">
        {messageList}
      </div>
      <NewMessageInfo
        handleDisplayMessages={handleDisplayMessages}
        newMessageCount={newMessageCount}
      />
    </div>
  );
};

export default MessageList;
