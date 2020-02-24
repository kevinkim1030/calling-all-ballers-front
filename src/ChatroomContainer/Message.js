import React from 'react'

const Message = ({ message }) => {
  return (
    <div className="event">
      <div className="ui card">
        <div className="content">
          <div className="summary">{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message
