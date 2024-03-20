import { useEffect, useState } from "react"
import { GetPostsByUser } from "../Services/ConnectToDB"
import PostListItem from "../Posts/PostListItem"

function UserPosts({ userId }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        GetPostsByUser(userId).then((response) => setPosts(response))
    }, [])

    return (
        <div>
            <h1>Their thoughts</h1>
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