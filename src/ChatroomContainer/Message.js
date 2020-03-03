import React from 'react'

const Message = ({ css, message }) => {
  return (
    <div className={css}>
      <div className="ui card">
        <div className="content">
          <div className="user-name">{message.user.username}</div>
          <div className="summary">{message.content}</div>
        </div>
      </div>
    </div>
  )
}

export default Message
