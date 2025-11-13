import React from "react"

const Notification = ({ type = "error", message }) => {
  if (!message) return null

  const baseStyle = "p-3 mt-4 text-sm font-medium rounded-lg text-center transition-all duration-300"

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
