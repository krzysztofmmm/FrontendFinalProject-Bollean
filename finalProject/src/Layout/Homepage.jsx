import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../App";
import Header from "./Header";
import PostList from "../Posts/PostList";
import SelectedPost from "../Posts/SelectedPost";
import '../Stylesheets/PostList.css'
import { GetUserById } from "../Services/ConnectToDB";

const postContext = createContext()

function HomePage() {
    const { setUser } = useContext(userContext)
    const navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState(null)
    const [posts, setPosts] = useState([]);
    //Get user from localstorage, and set user to correct user. If user doesn't
    //exist, go to the login page
    useEffect(() => {
        GetUserById(localStorage.getItem("user")).then(
            (response) => {
                if (!response) { navigate("/login") }
                else { setUser({ ...response }) }
            })
    }, [])

    return (
        <>
            <Header />
            <postContext.Provider value={{
                posts: posts,
                setPosts: setPosts,
                currentPost: currentPost,
                setCurrentPost: setCurrentPost
            }}>
                <div className="homePage">
                    <h1>Filters</h1>
                    <PostList />
                    <div>
                        <button className="addPostButton" onClick={() => setCurrentPost("new")}>Add Post</button>
                        <SelectedPost />
                    </div>

                </div>
            </postContext.Provider>


        </>
    )

}

export default HomePage
export { postContext }