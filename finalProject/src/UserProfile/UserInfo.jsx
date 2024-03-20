import { useState } from "react"
import EditUser from "./EditUser"

function UserInfo({ user }) {
    const [isEditing, setIsEditing] = useState(false)



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
            {localStorage.getItem("user") == user.id &&
                <button onClick={() => { setIsEditing(true) }}>Edit</button>}
        </div>

    )
}

export default UserInfo