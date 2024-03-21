import { useEffect, useState } from "react"
import { GetPostsByUser } from "../Services/ConnectToDB"
import PostListItem from "../Posts/PostListItem"

function UserPosts({ userId }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        GetPostsByUser(userId).then((response) => setPosts(response))
    }, [userId])

    return (
        <div>
            {localStorage.getItem("user") == userId &&
                <h1>Your thoughts</h1>}
            {localStorage.getItem("user") != userId &&
                <h1>Their thoughts</h1>}

            <div className="userPostList">

                {posts.map((post) => {
                    return (
                        <PostListItem post={post} />

                    )
                })}
            </div>
        </div>
    )
}

export default UserPosts