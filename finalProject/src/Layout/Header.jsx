import { useContext, useEffect, useState } from 'react'
import '../Stylesheets/header.css'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { GetUserById } from '../Services/ConnectToDB'

function Header() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        GetUserById(localStorage.getItem("user")).then((response) => {
            setUser(response)
        }
        )
    });

    if (!user) { return (<h1 className='header'>Loading...</h1>) }


    return (
        <div className="header">
            <h1 onClick={() => { navigate("/") }} >Whisper Rose</h1>
            <img onClick={() => { navigate("/") }} src="https://purepng.com/public/uploads/large/purepng.com-roseroseflowerpink-961524679718edfbk.png"></img>
            <button onClick={() => { navigate(`/profile/${user.id}`) }}>{user.firstName}</button>
        </div>
    )
}

export default Header