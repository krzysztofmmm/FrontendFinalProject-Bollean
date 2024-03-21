import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeletePost, GetUserById } from "../Services/ConnectToDB"
import { postContext } from "../Layout/Homepage"
import AddCommentForm from "./Comments/AddCommentForm"
import CommentList from "./Comments/CommentList"
import Likes from "./Likes"


function SelectPostItem() {
    const { currentPost, posts, setPosts, setCurrentPost } = useContext(postContext)
    if (localStorage.getItem("user") == currentPost.userId) {

    }
    const [author, setAuthor] = useState(null)
    const [showOptions, setShowOptions] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        GetUserById(currentPost.userId).then((response) => {
            setAuthor(response)
        })
    }, [currentPost])

    if (!author) {
        return <h1>Loading...</h1>
    }

    const EditOrDelete = (event) => {
        console.log("Edit or Delete")
        setShowOptions(true)
    }

    const handleDelete = (event) => {
        posts.splice(posts.indexOf(currentPost), 1)
        setPosts([...posts])
        DeletePost(currentPost.id)
        setCurrentPost(null)
    }

    const handleEdit = (event) => {
        console.log("EDIT POST")
        setCurrentPost({ edit: true, ...currentPost })
    }
    return (
        <>
            {showOptions && <div className="options commentOptions" onMouseLeave={() => { setShowOptions(false) }}>
                <p onClick={handleEdit}>Edit</p>
                <p onClick={handleDelete}>Delete</p>
            </div>}

            <div className='selectedPost'>
                <p className="date selectedDate">{new Date(currentPost.createdAt).toLocaleString()}</p>

                <h1>{currentPost.title} {localStorage.getItem("user") == currentPost.userId && <div className="optionButton" onClick={EditOrDelete}>&#8942; </div>} </h1>

                <p>{currentPost.content}</p>
                <p className="authorName selectedPostAuthor" onClick={() => { navigate(`/profile/${currentPost.userId}`) }}> by {author.firstName} {author.lastName}</p>

                <Likes postId={currentPost.id} />
            </div >
            <CommentList post={currentPost} />
        </>
    )
}

export default SelectPostItem