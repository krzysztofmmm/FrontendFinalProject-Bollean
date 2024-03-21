import { useEffect, useState } from "react"
import { GetUserById } from "../../Services/ConnectToDB"

function EditCommentForm({ currentComment, EditComment }) {
    const [form, setForm] = useState({ ...currentComment })
    const [user, setUser] = useState(null)


    useEffect(() => {
        GetUserById(currentComment.userId).then((response) => {
            setUser(response)
        })
    }, [currentComment])

    const handleChange = (event) => {
        form[event.target.name] = event.target.value;
        setForm({ ...form })
    }
    if (!user) return (
        <h1>Loading...</h1>
    )

    const handleSubmit = (event) => {
        EditComment(form.content)
        delete currentComment.edit
    }

    return (

        <div className="comment">
            <p className="userName">{user.firstName} {user.lastName} says:</p>

            <p className="commentDate">{new Date(currentComment.createdAt).toLocaleString()}</p>
            <input
                value={form.content}
                onChange={handleChange}
                name="content"></input>
            <button onClick={handleSubmit}>Edit</button>
        </div>
    )
}

export default EditCommentForm