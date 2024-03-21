import { useContext, useEffect, useState } from "react"
import { CountLikes, GetCommentsByPost, GetUserById } from "../Services/ConnectToDB"
import { postContext } from "../Layout/Homepage"

function PostListItem({ post }) {
    const [user, setUser] = useState(null)
    const { setCurrentPost } = useContext(postContext) || {}


    useEffect(() => {
        GetUserById(post.userId).then((response) => {
            setUser(response)
        });
    }, [post])

    if (!user) {
        return <p>Loading...</p>
    }

    const setPost = (event) => {
        setCurrentPost(post)
    }

    return (
        <div className="postListItem" onClick={setPost}>
            <p className="authorName">{user.firstName} says:</p>
            {new Date(post.createdAt).toLocaleString()}
            {post.title && <p className="postTitle">{post.title}</p>}
            <p className="postContent">{post.content}</p>
            <p hidden>{post.likes} Likes, {post.commentCount} comments</p>
        </div>

    )
}

export default PostListItem