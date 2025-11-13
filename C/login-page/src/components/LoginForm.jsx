import React, { useState } from "react"
import Notification from "./Notification"

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [notification, setNotification] = useState({ type: "", message: "" })

  const validUsers = {
    "test1@example.com": "Test1111!",
    "test2@example.com": "Test2222!",
  };

  const validatePassword = (password) => {
    const lengthOk = password.length >= 8 && password.length <= 16
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    return lengthOk && hasUpper && hasLower && hasNumber && hasSymbol
  };

  const showNotification = (type, message, duration = 2000) => {
    setNotification({ type, message })
    setTimeout(() => setNotification({ type: "", message: "" }), duration)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      showNotification("error", "Email is required.")
      return
    }
    if (!validUsers[email]) {
      showNotification("error", "Email not found.")
      return
    }
    if (!validatePassword(password)) {
      showNotification(
        "error",
        "Password must be 8-16 chars and include upper, lower, number, and symbol."
      )
      return
    }
    if (validUsers[email] !== password) {
      showNotification("error", "Incorrect password.")
      return
    }
    showNotification("success", "Login successful!")
    setTimeout(() => onLoginSuccess(email), 1000)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={() => alert("Reset Password")}>
          Forgot Password?
        </button>
      </form>
      <Notification type={notification.type} message={notification.message} />
    </div>
  )
}

export default LoginForm

