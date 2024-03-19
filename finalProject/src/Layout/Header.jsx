import { useContext } from 'react'
import '../Stylesheets/header.css'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Header() {
    const { user } = useContext(userContext)
    const navigate = useNavigate()
    return (
        <div className="header">
            <h1>Whisper Rose</h1>
            <img src="https://purepng.com/public/uploads/large/purepng.com-roseroseflowerpink-961524679718edfbk.png"></img>
            <button onClick={() => { navigate(`/profile/${user.id}`) }}>{user.firstName}</button>
        </div>
    )
}

export default Header