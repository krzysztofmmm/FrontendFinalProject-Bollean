import { useContext, useEffect } from "react";
import { userContext } from "../App"; // This might be unused, consider removing if not needed later
import { useNavigate } from "react-router-dom"; // This might be unused, consider removing if not needed later
import {
  CountLikes,
  GetAllPosts,
  GetCommentsByPost,
} from "../Services/ConnectToDB";
import PostListItem from "./PostListItem";
import "../Stylesheets/PostList.css";
import { postContext } from "../Layout/Homepage";

function PostList() {
  const { posts, setPosts, filter, sortBy } = useContext(postContext);

  useEffect(() => {
    GetAllPosts().then((result) => {
      // Commented due to time needed for feature to work
      /*
            result.forEach((element) => {
                GetCommentsByPost(element.id).then((res) => {
                    element.commentCount = res.length;
                });
                CountLikes(element.id).then(res => {
                    element.likes = res.likeCount;
                });
            });
            */
      setPosts(result);
    });
  }, [setPosts]);

  const filteredAndSortedPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(filter.toLowerCase()) ||
        post.content.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "lengthAsc") {
        return a.content.length - b.content.length;
      } else if (sortBy === "lengthDesc") {
        return b.content.length - a.content.length;
      }
      // Implement additional sorting options as needed
      return 0;
    });

  return (
    <div className="postList">
      {filteredAndSortedPosts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
