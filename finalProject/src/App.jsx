import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegisterForm from './Login/RegisterForm'
import LoginForm from './Login/LoginForm'
import PostList from './Posts/PostList'
import HomePage from './Layout/Homepage'

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
  const navigate = useNavigate()


  return (
    <userContext.Provider value={{
      user: user,
      setUser: setUser
    }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<h1>One specific post</h1>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile/:userId" element={<h1>User information about a specific user</h1>} />
        <Route path="/profile/edit" element={<h1>Edit your own profile</h1>} />
      </Routes>
    </userContext.Provider>
  )
}

export default App
export { userContext }