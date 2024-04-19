import React, { lazy } from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";

const PostTimeline = lazy(() => import("../Posts/Posts"));

function PostSide() {
  return (
    <div className="PostSide">
      <PostShare />
      <PostTimeline />
    </div>
  );
}

export default PostSide;
