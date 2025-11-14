import React from "react"
//notification for error and success display
const Notification = ({ type = "error", message }) => {
  if (!message) return null
  //layout
  const baseStyle = "p-3 mt-4 text-sm font-medium rounded-lg text-center transition-all duration-300"
  //specific color and style for different type message
  const styles = {
    success: "bg-green-100 text-green-800 border border-green-300 shadow-sm",
    error: "bg-red-100 text-red-800 border border-red-300 shadow-sm",
  }

  return (
    <div className={`${baseStyle} ${styles[type]}`}>
      {message}
    </div>
  )
}

export default Notification
