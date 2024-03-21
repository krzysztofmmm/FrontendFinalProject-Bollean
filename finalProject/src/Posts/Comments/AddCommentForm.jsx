import { useContext, useState } from "react"
import { userContext } from "../../App"
import { CreateComment } from "../../Services/ConnectToDB"
import { postContext } from "../../Layout/Homepage"

function AddCommentForm({ postId, addComment }) {
    const [isActive, setIsActive] = useState(false)
    const [content, setContent] = useState("")
    const { user } = useContext(userContext)
    const { posts, setPosts } = useContext(postContext)


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsActive(false)
        if (!content) return;
        CreateComment(user.id, postId, content)
            .then((response) => {
                addComment(response)
            })
        setContent("")
    }

    const handleInput = (event) => {
        setContent(event.target.value)
    }

    if (!isActive) {
        return (
            <div>
                <button onClick={() => setIsActive(true)}>Share your opinion</button>
            </div>
        )
    }

    else {
        return (
            <form onSubmit={handleSubmit}>
                <input name="content"
                    value={content}
                    onChange={handleInput} />
                <input type="submit"
                    value="Share" />
            </form>
        )
    }

}

export default AddCommentForm