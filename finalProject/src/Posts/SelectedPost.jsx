import { useContext, useEffect, useState } from 'react'
import '../Stylesheets/PostList.css'
import AddPostForm from './AddPostForm'
import PostListItem from './PostListItem'
import { GetUserById } from '../Services/ConnectToDB'
import { postContext } from '../Layout/Homepage'
import { useNavigate } from 'react-router-dom'
import SelectPostItem from './SelectPostItem'
import EditPostForm from './EditPostForm'


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
    else if (currentPost.edit) {
        return (
            <EditPostForm />
        )
    }
    else {
        return (<SelectPostItem />)
    }
}

export default SelectedPost