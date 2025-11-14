import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  //login state and email
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  //when login success
  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }
  //reset state when logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4 w-96">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, <span className="text-blue-600">{userEmail}</span>!
          </h2>
          <p className="text-gray-600 text-sm">
            You've successfully logged in.
          </p>
          <button
            onClick={handleLogout}
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default App
