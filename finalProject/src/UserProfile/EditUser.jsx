import { useState } from "react"
import { UpdateUser } from "../Services/ConnectToDB"

function EditUser({ setIsEditing, user }) {
    const [formUser, setFormUser] = useState(user)
    const handleSubmit = (event) => {
        UpdateUser(user.id, formUser.firstName, formUser.lastName, formUser.bio)
        setIsEditing(false)
        UpdateUser
    }

    const handleChange = (event) => {
        formUser[event.target.name] = event.target.value
        setFormUser({ ...formUser })
    }

    return (
        <form className="aboutUser">
            <h1>About</h1>
            <p>First name: <input value={formUser.firstName}
                name="firstName"
                onChange={handleChange} /></p>
            <label>Last name: <input value={formUser.lastName}
                name="lastName"
                onChange={handleChange} /></label>
            <div className="edit">
                <textarea
                    rows={10}
                    cols={40}
                    value={formUser.bio}
                    name="bio"
                    onChange={handleChange} ></textarea>
            </div>
            {localStorage.getItem("user") == user.id &&
                <button onClick={handleSubmit}>Save</button>}
        </form>
    )
}

export default EditUser