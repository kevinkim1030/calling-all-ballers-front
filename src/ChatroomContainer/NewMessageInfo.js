import React from 'react'

const pluralizeMessages = num => {
  return num > 1 ? 'messages' : 'message'
}

const NewMessageInfo = ({ newMessageCount, handleDisplayMessages }) => {
  if (!newMessageCount) return null

  return (
    <div onClick={handleDisplayMessages} className="ui message info">
      You have {newMessageCount} new {pluralizeMessages(newMessageCount)}
    </div>
  )
}

export default NewMessageInfo
