import { useContext, useEffect, useState } from 'react'
import '../Stylesheets/PostList.css'
import AddPostForm from './AddPostForm'
import PostListItem from './PostListItem'
import { GetUserById } from '../Services/ConnectToDB'
import { postContext } from '../Layout/Homepage'


function SelectedPost() {
    const { currentPost } = useContext(postContext)
    if (currentPost === "new") {
        return (
            <AddPostForm />
        )
    }
    else if (currentPost == null) {
        return (
            <div className='selectedPost'>
                <h1>Select a Post</h1>
            </div>
        )
    }
    else {
        const [author, setAuthor] = useState(null)

        useEffect(() => {
            GetUserById(currentPost.userId).then((response) => {
                setAuthor(response)
            })
        }, [currentPost])

        if (!author) {
            return <h1>Loading...</h1>
        }
        return (
            <div className='selectedPost'>
                <h1>{currentPost.title} </h1>
                <p>{author.firstName} {author.lastName}</p>
                <p>{currentPost.content}</p>
            </div>
        )
    }
}

export default SelectedPost