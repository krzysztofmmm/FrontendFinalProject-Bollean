import { useEffect, useState } from "react"
import { GetUserById } from "../Services/ConnectToDB"

function PostListItem({ post, setCurrentPost }) {
    console.log(post)
    const [user, setUser] = useState(null)

    useEffect(() => {
        GetUserById(post.userId).then((response) => {
            console.log(response)
            setUser(response)
        })
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
            {post.title && <p className="postTitle">{post.title}</p>}
            <p className="postContent">{post.content}</p>
        </div>

    )
}

export default PostListItem