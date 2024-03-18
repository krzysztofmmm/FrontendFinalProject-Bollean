import { useContext, useState } from "react";
import { CreatePost } from "../Services/ConnectToDB";
import { userContext } from "../App";

const INITIAL_FORM = {
    title: "",
    content: ""
}
function AddPostForm({ setCurrentPost }) {
    const { user } = useContext(userContext)
    const [form, setForm] = useState({ ...INITIAL_FORM })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", event)
        if (!form.content) {
            return
        }
        CreatePost(user.id, form.title, form.content)
        setCurrentPost(null)
    }
    const handleChange = (event) => {
        form[event.target.name] = event.target.value;
        setForm({ ...form })
    }

    return (
        <form onSubmit={handleSubmit} className='newPost'>
            <label>Title <input name="title"
                value={form.title}
                onChange={handleChange} /></label>
            <label>Content<textarea
                cols="30"
                rows="20"
                name="content"
                value={form.content}
                onChange={handleChange}
                required
            /></label>
            <input
                type="submit"
                value="Share with the world" />
        </form>
    )
}

export default AddPostForm