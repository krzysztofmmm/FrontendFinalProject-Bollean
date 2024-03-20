import { createContext, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegisterForm from './Login/RegisterForm'
import LoginForm from './Login/LoginForm'
import HomePage from './Layout/Homepage'
import ProfilePage from './UserProfile/ProfilePage'

const userContext = createContext()
const INITIAL_USER = {
  email: "",
  firstName: "",
  lastName: "",
  id: -1,
  role: 1,
  bio: ""
}

function App() {
  const [user, setUser] = useState(INITIAL_USER)

  return (
    <userContext.Provider value={{
      user: user,
      setUser: setUser,
      INITIAL_USER: INITIAL_USER
    }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<h1>Edit your own profile</h1>} />
      </Routes>
    </userContext.Provider>
  )
}

export default App
export { userContext }