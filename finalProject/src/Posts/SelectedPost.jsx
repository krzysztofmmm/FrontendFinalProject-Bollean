import { useEffect, useState } from 'react'
import '../Stylesheets/PostList.css'
import AddPostForm from './AddPostForm'
import PostListItem from './PostListItem'
import { GetUserById } from '../Services/ConnectToDB'


function SelectedPost({ currentPost, setCurrentPost }) {
    console.log("Show current post", currentPost)
    if (currentPost === "new") {
        return (
            <AddPostForm setCurrentPost={setCurrentPost} />
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
        const [user, setUser] = useState(null)

        useEffect(() => {
            GetUserById(currentPost.userId).then((response) => {
                console.log(response)
                setUser(response)
            })
        }, [currentPost])

        if (!user) {
            return <h1>Loading...</h1>
        }
        return (
            <div className='selectedPost'>
                <h1>{currentPost.title} </h1>
                <p>{user.firstName} {user.lastName}</p>
                <p>{currentPost.content}</p>
            </div>
        )
    }
}

export default SelectedPost