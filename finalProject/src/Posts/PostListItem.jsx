function PostListItem({ post }) {
    console.log(post)
    return (
        <div className="postListItem">
            <p className="authorName">{post.userId} says:</p>
            {post.title && <p className="postTitle">{post.title}</p>}
            <p className="postContent">{post.content}</p>
        </div>

    )
}

export default PostListItem