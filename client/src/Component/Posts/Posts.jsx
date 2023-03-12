import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostData";
import Post from "../Post/Post";
function Posts() {
  return (
    <div className="Posts">
      {PostsData?.map((posts, index) => (
        <Post data={posts} id={index} />
      ))}
    </div>
  );
}

export default Posts;
