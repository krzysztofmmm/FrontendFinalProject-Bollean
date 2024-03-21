import { useContext, useEffect } from "react";
import { postContext } from "../Layout/Homepage";
import { GetAllPosts } from "../Services/ConnectToDB";
import PostListItem from "./PostListItem";
import "../Stylesheets/PostList.css";

function PostList() {
  const { posts, setPosts, filter, sortBy } = useContext(postContext);

  useEffect(() => {
    GetAllPosts().then((result) => setPosts(result));
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
