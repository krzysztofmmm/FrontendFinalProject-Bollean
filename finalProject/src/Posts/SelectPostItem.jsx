import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetUserById } from "../Services/ConnectToDB"

function SelectPostItem({ currentPost }) {

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

    }
    return (
        <>
            {showOptions && <div className="options" onMouseLeave={() => { setShowOptions(false) }}>
                <p>Edit</p>
                <p>Delete</p>
            </div>}

            <div className='selectedPost'>
                <h1>{currentPost.title} {localStorage.getItem("user") == currentPost.userId && <div className="optionButton" onClick={EditOrDelete}>&#8942; </div>} </h1>

                <p onClick={() => { navigate(`/profile/${currentPost.userId}`) }}> {author.firstName} {author.lastName}</p>
                <p>{currentPost.content}</p>
            </div >
        </>
    )
}

export default SelectPostItem