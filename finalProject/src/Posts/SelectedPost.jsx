import '../Stylesheets/PostList.css'
import AddPostForm from './AddPostForm'


function SelectedPost({ currentPost, setCurrentPost }) {
    if (currentPost === "new") {


        return (
            <AddPostForm currentPost={currentPost} setCurrentPost={setCurrentPost} />
        )
    }
    return (
        <div className='selectedPost'>
            <h1>Selected Post</h1>
        </div>
    )
}

export default SelectedPost