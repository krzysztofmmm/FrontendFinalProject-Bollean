import { useContext, useState } from "react"
import { postContext } from "../Layout/Homepage"
import { EditPost } from "../Services/ConnectToDB"

function EditPostForm() {
    const { currentPost, posts, setPosts, setCurrentPost } = useContext(postContext)
    const [form, setForm] = useState({ ...currentPost })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Edited: ", form)
        EditPost(form.id, form.title, form.content)

        delete currentPost.edit

        console.log("Index: ", posts.findIndex((x) => x.id === currentPost.id))
        posts[posts.findIndex((x) => x.id === currentPost.id)] = { ...posts, title: form.title, content: form.content }
        currentPost.title = form.title
        currentPost.content = form.content

        console.log("Posts:", posts)
        setPosts([...posts])
        setCurrentPost({ ...currentPost })

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
                value="Change your thought" />
        </form>
    )
}

export default EditPostForm