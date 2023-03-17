import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostData";
import Post from "../Post/Post";
function Posts() {
  return (
    <div className="Posts">
      {PostsData?.map((posts, index) => (
        <div key={index} className="Post">
          <Post data={posts} id={index} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
