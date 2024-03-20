import { useEffect, useState } from "react"
import { GetUserById } from "../../Services/ConnectToDB"

function CommentListItem({ comment }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        GetUserById(comment.userId).then((response) => {
            setUser(response)
        })
    }, [comment])

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div className="comment">
            <p className="userName">{user.firstName} {user.lastName} says:</p>
            <p>{comment.content}</p>
        </div>

    )
}

export default CommentListItem