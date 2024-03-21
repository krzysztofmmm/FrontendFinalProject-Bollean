import { useContext, useEffect, useState } from "react"
import { CountLikes, GetCommentsByPost, GetUserById } from "../Services/ConnectToDB"
import { postContext } from "../Layout/Homepage"

function PostListItem({ post }) {
    const [user, setUser] = useState(null)

    const { posts, setCurrentPost } = useContext(postContext) || {}


    useEffect(() => {
        GetUserById(post.userId).then((response) => {
            setUser(response)
        });
    }, [post])

    if (!user) {
        return <p>Loading...</p>
    }

    const setPost = (event) => {
        setCurrentPost(post);
        posts.map((p) => p.selected = false)
        post.selected = true

    }

    return (
        <div className={`postListItem ${post.selected ? 'selected' : ''}`} onClick={setPost}>
            <p className="date">{new Date(post.createdAt).toLocaleString()}</p>


            {post.title && <p className="postTitle">{post.title}</p>}
            <p className="authorName">By {user.firstName}</p>
            <p className="postContent">{post.content}</p>

            <p hidden>{post.likes} Likes, {post.commentCount} comments</p>
        </div>

    )
}

export default PostListItem