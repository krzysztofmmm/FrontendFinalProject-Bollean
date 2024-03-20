import { useContext, useState } from "react"
import EditUser from "./EditUser"
import { useNavigate } from "react-router-dom"
import { userContext } from "../App"

function UserInfo({ user }) {
    const [isEditing, setIsEditing] = useState(false)
    const { setUser, INITIAL_USER } = useContext(userContext)
    const navigate = useNavigate()

    const logOut = (event) => {
        localStorage.removeItem("user")
        setUser(INITIAL_USER)
        navigate("/login")
        console.log("Logout")
    }


    if (isEditing) {
        return <EditUser setIsEditing={setIsEditing} user={user} />
    }
    return (
        <div className="aboutUser">
            <h1>About</h1>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
            <div className="bio">
                <p>{user.bio || 'The user did not provide a bio'}</p>
            </div>
            <div>
                {localStorage.getItem("user") == user.id &&
                    <button onClick={() => { setIsEditing(true) }}>Edit</button>}
            </div>
            {(localStorage.getItem("user") == user.id && !isEditing) && <button className="logOut" onClick={logOut}>Logout</button>}
        </div >

    )
}

export default UserInfo