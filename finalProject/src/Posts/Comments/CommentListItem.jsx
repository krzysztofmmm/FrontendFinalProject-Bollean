import { useEffect, useState } from "react"
import { GetUserById } from "../../Services/ConnectToDB"
import Likes from "../Likes"

function CommentListItem({ comment }) {

    const [user, setUser] = useState(null)
    const [showOptions, setShowOptions] = useState(false)


    useEffect(() => {
        GetUserById(comment.userId).then((response) => {
            setUser(response)
        })
    }, [comment])

    if (!user) {
        return <p>Loading...</p>
    }
    const handleDelete = (event) => {
        posts.splice(posts.indexOf(currentPost), 1)
        setPosts([...posts])
        DeletePost(currentPost.id)
        setCurrentPost(null)
    }

    const handleEdit = (event) => {
        console.log("EDIT POST")
        setCurrentPost({ edit: true, ...currentPost })
    }

    return (
        <>

            {showOptions && <div className="options" onMouseLeave={() => { setShowOptions(false) }}>
                <p onClick={handleEdit}>Edit</p>
                <p onClick={handleDelete}>Delete</p>
            </div>}
            <div className="comment">
                <p className="commentDate">{new Date(comment.createdAt).toLocaleString()}</p>
                <p className="userName">{user.firstName} {user.lastName} says:</p>
                <p>{comment.content}</p>
                <Likes commentId={comment.id} postId={comment.postId} />
            </div>
        </>

    )
}

export default CommentListItem