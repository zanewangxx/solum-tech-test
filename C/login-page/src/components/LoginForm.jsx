import React, { useState } from "react"
import Notification from "./Notification"

const LoginForm = ({ onLoginSuccess }) => {
  //component state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [notification, setNotification] = useState({ type: "", message: "" })
  //hardcode user list
  const validUsers = {
    "test1@example.com": "Test1111!",
    "test2@example.com": "Test2222!",
  }
  //password rules
  const validatePassword = (password) => {
    const lengthOk = password.length >= 8 && password.length <= 16
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    return lengthOk && hasUpper && hasLower && hasNumber && hasSymbol
  }
  //notification
  const showNotification = (type, message, duration = 2000) => {
    setNotification({ type, message })
    setTimeout(() => setNotification({ type: "", message: "" }), duration)
  }
  //login form handling
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
        "Password must be 8–16 chars and include upper, lower, number, and symbol."
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Login
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>

          <div className="flex items-stretch rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 overflow-hidden bg-white">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="flex-1 px-3 py-2 outline-none text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="w-16 px-4 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-200 transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => showNotification("success", "Password reset link sent.")}
          className="block w-full text-blue-500 text-sm hover:underline text-center"
        >
          Forgot password?
        </button>

        <Notification type={notification.type} message={notification.message} />
      </form>
    </div>
  )
}

export default LoginForm


