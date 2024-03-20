import { useEffect, useState } from "react"
import AddCommentForm from "./AddCommentForm"
import { GetCommentsByPost } from "../../Services/ConnectToDB"
import CommentListItem from "./CommentListItem"
import '../../Stylesheets/comments.css'

function CommentList({ post }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        GetCommentsByPost(post.id).then(
            (response) => {
                setComments(response)
                console.log(response)
            })
    }, [post])

    const addComment = (comment) => {
        comments.unshift(comment)
        setComments([...comments])
    }
    return (
        <div>
            <AddCommentForm postId={(post.id)} addComment={addComment} />
            <div className="commentsList">

                {
                    comments.map((comment) => {
                        return (
                            <CommentListItem comment={comment} />
                        )
                    })
                }
            </div>
        </div>


    )
}

export default CommentList