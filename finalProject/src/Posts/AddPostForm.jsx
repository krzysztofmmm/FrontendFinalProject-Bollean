import { useContext, useState } from "react";
import { CreatePost } from "../Services/ConnectToDB";
import { userContext } from "../App";
import { postContext } from "../Layout/Homepage";

const INITIAL_FORM = {
    title: "",
    content: ""
}
function AddPostForm() {
    const { user } = useContext(userContext)
    const { setCurrentPost, posts, setPosts } = useContext(postContext)
    const [form, setForm] = useState({ ...INITIAL_FORM })

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.content) {
            return
        }
        CreatePost(user.id, form.title, form.content)
        const newPost = {
            content: form.content,
            userId: user.id,
            title: form.title
        }
        posts.push(newPost)
        setPosts([...posts])
        setCurrentPost(null)
    }
    const handleChange = (event) => {
        form[event.target.name] = event.target.value;
        setForm({ ...form })
    }

    return (
        <form onSubmit={handleSubmit} className='newPost'>
            <p>Title:</p>
            <input name="title"
                value={form.title}
                onChange={handleChange} />
            <p>Content:</p>
            <textarea
                cols="30"
                rows="20"
                name="content"
                value={form.content}
                onChange={handleChange}
                required
            />
            <input
                type="submit"
                value="Share with the world" />
        </form>
    )
}

export default AddPostForm