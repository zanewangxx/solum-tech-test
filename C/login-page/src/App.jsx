import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
  }

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <h2>Welcome, {userEmail}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  )
}

export default App
