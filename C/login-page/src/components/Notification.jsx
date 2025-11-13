import React from "react"

const Notification = ({ type = "error", message }) => {
  if (!message) return null

  return (
    <div>
      {message}
    </div>
  )
}

export default Notification

