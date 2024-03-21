import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import Header from "./Header";
import PostList from "../Posts/PostList";
import SelectedPost from "../Posts/SelectedPost";
import FilterPosts from "../Posts/FilterPosts";
import "../Stylesheets/PostList.css";
import { GetUserById } from "../Services/ConnectToDB";

const postContext = createContext();

function HomePage() {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState(""); // Added sorting state

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      GetUserById(localStorage.getItem("user")).then((response) => {
        if (!response) {
          navigate("/login");
        } else {
          setUser({ ...response });
        }
      });
    }
  }, [navigate, setUser]);

  return (
    <>
      <Header />
      <postContext.Provider
        value={{
          posts,
          setPosts,
          currentPost,
          setCurrentPost,
          filter,
          setFilter,
          sortBy, // Provide sorting state
          setSortBy, // Provide sorting state setter
        }}
      >
        <div className="homePage">
          <FilterPosts />
          <PostList />
          <div>
            <button
              className="addPostButton"
              onClick={() => setCurrentPost("new")}
            >
              Add Post
            </button>
            <SelectedPost />
          </div>
        </div>
      </postContext.Provider>
    </>
  );
}

export default HomePage;
export { postContext };
