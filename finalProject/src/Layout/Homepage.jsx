import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../App";
import Header from "./Header";
import PostList from "../Posts/PostList";
import SelectedPost from "../Posts/SelectedPost";
import '../Stylesheets/PostList.css'

function HomePage() {
    const { user } = useContext(userContext)
    const navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState(null)

    //When the user is not logged in, go to the log-in page
    useEffect(() => {
        if (user.id === -1) { navigate("/login") }
    }, [])
    return (
        <>
            <Header />
            <div className="homePage">
                <h1>Filters</h1>
                <PostList />
                <div>
                    <button onClick={() => setCurrentPost("new")}>Add Post</button>
                    <SelectedPost currentPost={currentPost} setCurrentPost={setCurrentPost} />
                </div>

            </div>


        </>
    )

}

export default HomePage