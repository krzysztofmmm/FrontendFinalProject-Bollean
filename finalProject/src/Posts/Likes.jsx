import { useContext, useEffect, useState } from "react"
import { CountLikes, HasUserLikes, ToggleLike } from "../Services/ConnectToDB"
import { userContext } from "../App"

function Likes({ postId, commentId }) {
    const { user } = useContext(userContext)
    const [isLiked, setIsLiked] = useState(false)
    const [hasLikes, setHasLikes] = useState(0)

    useEffect(() => {
        HasUserLikes(user.id, postId, commentId)
            .then((response) => {
                console.log(response)
                setIsLiked(response)
            });
        CountLikes(postId).then((response) => {
            setHasLikes(response.likeCount)
        })
    }, [postId, isLiked])

    const Toggle = (event) => {
        setIsLiked(!isLiked)
        ToggleLike(user.id, postId, commentId)
    }

    return (
        <div className="like" onClick={Toggle}>
            {
                isLiked && <img src="https://www.freeiconspng.com/uploads/heart-icon-14.png"></img> ||
                <img src="http://www.pngall.com/wp-content/uploads/4/Black-Heart-Symbol-PNG-Clipart.png"></img>
            }
            Has {hasLikes} likes
        </div>
    )
}

export default Likes