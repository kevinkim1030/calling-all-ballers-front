import React from 'react'

const Message = ({ message }) => {
  console.log("MESSAGE", message);
  
  return (
    <div className="event">
      <div className="ui card">
        <div className="content">
          <div className="user-name">{message.user.username}</div>
          <div className="summary">{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message
