import { useEffect, useState } from "react"
import { GetUserById } from "../../Services/ConnectToDB"
import Likes from "../Likes"
import EditCommentForm from "./EditCommentForm"

function CommentListItem({ comment, DeleteComment, comments, setComments }) {

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
        DeleteComment(comment)
        setShowOptions(false)
    }

    const handleEdit = (event) => {
        comment.edit = true;
        setComments([...comments])
    }

    const Edit = (newContent) => {
        comment.content = newContent;
        delete comment.edit
        setComments([...comments])
        setShowOptions(false)
    }

    if (comment.edit) {
        return (
            <EditCommentForm currentComment={comment} EditComment={Edit}></EditCommentForm>
        )
    }
    return (
        <>

            {showOptions && <div className="options commentOptions" onMouseLeave={() => { setShowOptions(false) }}>
                <p onClick={handleEdit}>Edit</p>
                <p onClick={handleDelete}>Delete</p>
            </div>}
            <div className="comment">
                <p className="userName">{user.firstName} {user.lastName} says:</p>

                <p className="commentDate">{new Date(comment.createdAt).toLocaleString()}</p>
                <p>{comment.content}</p>

                <h1>{localStorage.getItem("user") == comment.userId && <div className="optionButton commentOptionsButton" onClick={() => { setShowOptions(true) }}>&#8942; </div>} </h1>

                <Likes commentId={comment.id} postId={comment.postId} />
            </div>
        </>

    )
}

export default CommentListItem