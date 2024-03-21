import { useContext, useEffect, useState } from "react"
import { userContext } from "../App"
import { useNavigate } from "react-router-dom"
import { CountLikes, GetAllPosts, GetCommentsByPost } from "../Services/ConnectToDB";
import PostListItem from "./PostListItem";
import '../Stylesheets/PostList.css'
import { postContext } from "../Layout/Homepage";


function PostList() {

    const { posts, setPosts } = useContext(postContext)
    //Get all posts from the API
    useEffect(() => {
        GetAllPosts().then((result) => {
            /*
            result.forEach((element) => {
                GetCommentsByPost(element.id).then((res) => {

                    element.commentCount = res.length
                }
                )
                CountLikes(element.id).then(res => {
                    element.likes = res.likeCount
                })
            });
            */
            setPosts(result)
        })
    }, [])



    return (
        <div className="postList">
            {posts.map((post) => {
                return (
                    <PostListItem post={post} />
                )
            })}
        </div>
    )
}

export default PostList