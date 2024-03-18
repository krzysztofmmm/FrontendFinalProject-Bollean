import { useContext, useEffect, useState } from "react"
import { userContext } from "../App"
import { useNavigate } from "react-router-dom"
import { GetAllPosts } from "../Services/ConnectToDB";
import PostListItem from "./PostListItem";
import '../Stylesheets/PostList.css'


function PostList() {
    const { user } = useContext(userContext)
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    //When the user is not logged in, go to the log-in page
    useEffect(() => {
        if (user.id === -1) { navigate("/login") }
    }, [])

    //Get all posts from the API
    useEffect(() => {
        GetAllPosts().then((result) => setPosts(result))
    }, [])



    return (
        <div className="postList">
            {posts.map((post) => {
                return (
                    <PostListItem post={post} />
                )
            })}
        </div>
    )
}

export default PostList