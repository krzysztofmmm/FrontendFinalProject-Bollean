import { useContext, useEffect } from "react"
import { userContext } from "../App"
import { useNavigate } from "react-router-dom"

function PostList() {
    const { user } = useContext(userContext)
    const navigate = useNavigate();

    //When the user is not logged in, go to the log-in page
    useEffect(() => {
        if (!user) { navigate("/login") }
    }, [])

    console.log(user)
    return (
        <h1>PostList</h1>
    )
}

export default PostList